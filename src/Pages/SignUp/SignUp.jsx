import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import { userService } from "../../Service/index,";
import { schemaSignUp } from "../../Service/axiosSignupandSignin";
import Header from "../../Components/Header/Header";
import { signuppp } from "../../Redux/Actions/course";
import BackgroundSignup from "../../asset/img/bgsigninsignup.png";
import "./Signup.css";
import { Link, NavLink, useHistory } from "react-router-dom";
import banner from "../../asset/img/movie-Banner.jpg";
import usser from "../../asset/img/usser.png";

import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import * as yup from "yup";

function SignUp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const paperStyle = {
    padding: 20,
    width: 300,
    margin: "0 auto",
    height: "100%",
  };
  const headerStyle = { margin: 0 };
  const spaceStyle = { margin: "10px 0" };

  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 10 };
  const initialValues = {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  };

  const phoneRegExp =
    /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
  const validationSchema = yup.object().shape({
    taiKhoan: yup
      .string()
      .trim("Khoảng trắng ko hợp lệ!!")
      .strict(true)
      .required("Không đc để trống!"),
    hoTen: yup
      .string()
      .trim("Khoảng trắng ko hợp lệ!!")
      .strict(true)
      .required("Không đc để trống!"),

    email: yup
      .string()
      .email("Không đúng định dạng!")
      .trim("Khoảng trắng ko hợp lệ!")
      .strict(true)
      .required("Không đc để trống!"),
    soDt: yup
      .string()
      .required("Không đc để trống!")
      .matches(phoneRegExp, "Số đt ko hợp lệ"),
    matKhau: yup
      .string()
      .min(4, "Tối thiểu 4 kí tự")
      .trim("Khoảng trắng ko hợp lệ!!")
      .strict(true)
      .required("Không đc để trống!"),

    // soDt:Yup.string().("Nhập đúng định dạng mail!")
  });
  const handleSubmit = (values, props) => {
    console.log(values);
    dispatch(
      signuppp(values, () => {
        props.resetForm();
      })
    );
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Đăng ký </h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                helperText={
                  <ErrorMessage name="taiKhoan">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
                as={TextField}
                name="taiKhoan"
                style={spaceStyle}
                fullWidth
                label="Tài khoản"
                placeholder="Nhập tài khoản"
              />
              <Field
                helperText={
                  <ErrorMessage name="hoTen">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
                as={TextField}
                name="hoTen"
                style={spaceStyle}
                fullWidth
                label="Họ tên"
                placeholder="Nhập họ tên"
              />
              <Field
                helperText={
                  <ErrorMessage name="email">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
                as={TextField}
                name="email"
                style={spaceStyle}
                fullWidth
                label="Email"
                placeholder="Nhập email"
              />
              <Field
                helperText={
                  <ErrorMessage name="soDt">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
                as={TextField}
                name="soDt"
                style={spaceStyle}
                type="number"
                fullWidth
                label="Số điện thoại"
                placeholder="Nhập số điện thoại"
              />
              <Field
                helperText={
                  <ErrorMessage name="matKhau">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
                as={TextField}
                name="matKhau"
                style={spaceStyle}
                fullWidth
                label="Mật khẩu"
                placeholder="Nhập mật khẩu"
              />

              <Button
                type="submit"
                style={{ marginTop: 10 }}
                variant="contained"
                color="primary"
                fullWidth
              >
                Đăng ký
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}

export default SignUp;
