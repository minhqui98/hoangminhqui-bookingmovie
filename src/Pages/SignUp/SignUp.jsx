import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
// import { userService } from "../../Service/index,";
import { schemaSignUp } from '../../Service/axiosSignupandSignin';
import Header from '../../Components/Header/Header';
import { signuppp } from '../../Redux/Actions/course';
import BackgroundSignup from "../../asset/img/bgsigninsignup.png";
import "./Signup.css";
import { NavLink } from "react-router-dom";

class SignUp extends Component {
    handleSubmit = (values) => {
        this.props.dispatch(signuppp(values,()=>{
            this.props.history.push("/");
        }))
    }
    
    render() {
        
        return (
            <div>
                <Header />
                
                <div className="container-fluild" style={{ backgroundImage: `url(${BackgroundSignup})`, width: "100%", height: "100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-6 col-md-3 form-content">
                            <Formik validationSchema={schemaSignUp} onSubmit={this.handleSubmit} initialValues={{ taiKhoan: '', hoTen: '', email: '', matKhau: '', maNhom: 'GP01', soDT: '',maLoaiNguoiDung:"KhachHang" }} render={(formikProp) => {
                                return (
                                    <Form className="form-container text-light">
                                        <h1 className="text-light">Đăng kí</h1>
                                        <div className="form-group">
                                            <h4 className="text-left">Tài khoản</h4>
                                            <Field placeholder="Tài khoản" type="text" className="form-control" name="taiKhoan" onChange={formikProp.handleChange} />
                                            <ErrorMessage name="taiKhoan">{(msg) => { return (<div className="alert alert-danger">{msg}</div>) }}</ErrorMessage>
                                        </div>
                                        <div className="form-group">
                                            <h4 className="text-left">Họ tên</h4>
                                            <Field placeholder="Họ tên" type="text" className="form-control" name="hoTen" onChange={formikProp.handleChange} />
                                            <ErrorMessage name="hoTen">{(msg) => { return (<div className="alert alert-danger">{msg}</div>) }}</ErrorMessage>
                                        </div>
                                        <div className="form-group">
                                            <h4 className="text-left">Email</h4>
                                            <Field placeholder="Email" type="email" className="form-control" name="email" onChange={formikProp.handleChange} />
                                            <ErrorMessage name="email">{(msg) => { return (<div className="alert alert-danger">{msg}</div>) }}</ErrorMessage>
                                        </div>
                                        <div className="form-group">
                                            <h4 className="text-left">Số điện thoại</h4>
                                            <Field placeholder="Số ĐT" className="form-control" name="soDT" onChange={formikProp.handleChange} />
                                            <ErrorMessage name="soDT">{(msg) => { return (<div className="alert alert-danger">{msg}</div>) }}</ErrorMessage>
                                        </div>
                                        <div className="form-group">
                                            <h4 className="text-left">Mật khẩu</h4>
                                            <Field placeholder="Mật khẩu" type="password" className="form-control" name="matKhau" onChange={formikProp.handleChange} />
                                            <ErrorMessage name="matKhau">{(msg) => { return (<div className="alert alert-danger">{msg}</div>) }}</ErrorMessage>
                                        </div>
                                        <div className="form-group">
                                            <h4 className="text-left">Mã nhóm</h4>
                                            <Field component="select" className="form-control" name="maNhom" onChange={formikProp.handleChange}>
                                                <option>GP01</option>
                                                <option>GP02</option>
                                                <option>GP03</option>
                                                <option>GP04</option>
                                                <option>GP05</option>
                                                <option>GP06</option>
                                                <option>GP07</option>
                                                <option>GP08</option>
                                                <option>GP09</option>
                                                <option>GP10</option>
                                            </Field>
                                        </div>
                                        <p>Đã có tài khoản ?<NavLink to="/signin"> Đăng nhập ngay !</NavLink></p>
                                        <button className="btn btn-success w-100">Đăng kí</button>
                                    </Form>)
                            }} />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default SignUp;