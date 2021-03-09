import React, { Component } from 'react';
import { Formik, Form, Field } from "formik";
import { themPhimAction } from '../../../Redux/Actions/course';
import { connect } from "react-redux";
import Swal from 'sweetalert2';

class ThemPhim extends Component {
    handelSubmit = (values,formReset) => {
        var form_data=new FormData();
        for(var key in values)
        {
            form_data.append(key,values[key])
        }
        this.props.dispatch(themPhimAction(form_data,()=>{
            Swal.fire({
                title: "Thêm phim thành công!",
                icon: "success", //error, success,warning,question
                confirmButtonText: "Tiếp tục",
            })
        }))
        formReset.resetForm();
    }   
    render() {
        return (
            <div>
                <Formik initialValues={{ maPhim: "", tenPhim: "", biDanh: "", trailer: "", hinhAnh: " ", moTa: "", ngayKhoiChieu: "", danhGia: "", maNhom: "GP01" }} onSubmit={this.handelSubmit}>{(props) => {
                    return (
                        <Form>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <Field className="form-control" name="maPhim" placeholder="Mã Phim" onChange={props.handleChange} />

                                    </div>
                                    <div className="form-group">
                                        <Field className="form-control" name="tenPhim" placeholder="Tên Phim" onChange={props.handleChange} />

                                    </div>
                                    <div className="form-group">
                                        <Field className="form-control" name="biDanh" placeholder="Bí danh" onChange={props.handleChange} />

                                    </div>
                                    <div className="form-group">
                                        <Field className="form-control" name="trailer" placeholder="Trailer" onChange={props.handleChange} />

                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="file" name="hinhAnh" placeholder="Hình ảnh" onChange={(event)=>{
                                        props.setFieldValue("hinhAnh",event.target.files[0])
                                    }} />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                    <Field className="form-control"  name="moTa" placeholder="Mô tả" onChange={props.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <Field className="form-control" name="ngayKhoiChieu" placeholder="Ngày khởi chiếu" onChange={props.handleChange} />

                                    </div>
                                    <div className="form-group">
                                        <Field className="form-control" name="danhGia" placeholder="Đánh giá" onChange={props.handleChange} />

                                    </div><div className="form-group">
                                        <Field component="select" className="form-control" name="maNhom" onChange={props.handleChange}>
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
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-success">Thêm phim</button>
                                        </div>
                                </div>
                            </div>
                            
                        </Form>)
                }}</Formik>
            </div>
        );
    }
}

export default connect() (ThemPhim);