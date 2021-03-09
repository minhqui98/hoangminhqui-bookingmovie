import { Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCourse, layLichChieu } from '../../Redux/Actions/course';



class DatPhimNhanh extends Component {
    onClickLayLichChieu = (payLoad) => {
        this.props.dispatch(layLichChieu(payLoad))
        console.log(payLoad);
    }
    handleChange=(event)=>{
        return{
            name:event.target.value,
        }
    }
    handleSubmit = (value) => {
        console.log(value);
    }
    render() {

        return (
            <div className="container">
                <div className="row justify-content-center align-items-center bg-light movie">
                    <Formik onSubmit={this.handleSubmit} initialValues={{ tenPhim: " " }}>
                        {(formikProp) => {
                            return (
                                <Form>
                                    <div className="col-2dot4 col-xl-2dot4 p-2">
                                            <Field component="select" className="form-control" name="tenPhim" onChange={formikProp.handleChange}>
                                                <option >Tên phim</option>
                                           </Field> 
                                    </div>
                                    <div className="col-2dot4 col-xl-2dot4 p-2">

                                    </div>
                                    <div className="col-2dot4 col-xl-2dot4 p-2">

                                    </div>
                                    <div className="col-2dot4 col-xl-2dot4 p-2">

                                    </div>
                                    <div className="col-2dot4 col-xl-2dot4 p-2">
                                        <button className="btn btn-danger btn-block">Mua vé</button>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>

                </div>
            </div>
        );
    }
    componentDidMount() {
        this.props.dispatch(fetchCourse())
    }
}
const mapStateToProp = (state) => {
    return {
        movieList: state.phim.ListPhim,

    }
}
export default connect(mapStateToProp)(DatPhimNhanh);