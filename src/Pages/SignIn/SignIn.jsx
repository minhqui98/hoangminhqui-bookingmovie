import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Header from '../../Components/Header/Header';
// import PhimService from '../../Service/axiosMovie';
// import { phimService, userService } from '../../Service/index,';
import { login } from '../../Redux/Actions/course';
import { connect } from "react-redux";
import "./Signin.css";
import Background from "../../asset/img/bgsigninsignup.png";
import { NavLink } from "react-router-dom";
import { schemaSignin } from "../../Service/axiosSignupandSignin";
import Swal from "sweetalert2";
class SignIn extends Component {
    handleSubmit = (values) => {
        this.props.dispatch(login(values,()=>{
            Swal.fire({
                text: "Đăng nhập thành công !",
                title: "Thành công",
                icon: "success",
                confirmButtonText: "Tiếp tục",
            });
            // this.props.history.replace("/");
            this.props.history.goBack();
        }));
        
        
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid" style={{backgroundImage:`url(${Background})`,width:"100%",height:"100vh",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-6 col-md-3 form-content">
                            <Formik validationSchema={schemaSignin} initialValues={{ taiKhoan: "", matKhau: "" }} onSubmit={this.handleSubmit} render={(formikProp) => {
                                return (
                                    <Form className="form-container">
                                        <h1 className="text-light">Đăng nhập</h1>
                                        <div className="form-group">
                                            <p className="text-left text-white">Tài khoản</p>
                                            <Field name="taiKhoan" onChange={formikProp.handleChange} type="text" className="form-control" />
                                            <ErrorMessage name="taiKhoan">{(msg)=>{return <div className="alert alert-danger">{msg}</div>}}</ErrorMessage>
                                        </div>
                                        <div className="form=grpup">
                                            <p className="text-left text-white">Mật khẩu</p>
                                            <Field name="matKhau" onChange={formikProp.handleChange} type="password" className="form-control" />
                                            <ErrorMessage name="matKhau">{(msg)=>{return <div className="alert alert-danger">{msg}</div>}}</ErrorMessage>
                                        </div>
                                        <p className="text-white mt-2">Chưa có tài khoản ? <NavLink to="/signup">Đăng kí ngay!</NavLink> </p>
                                            <button className="btn btn-success btn-block mt-4">Đăng nhập</button>
                                    </Form>
                                )
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProp=(state)=>{
    return{
        credential:state.phim.credential,
    }
}
export default connect(mapStateToProp)(SignIn);