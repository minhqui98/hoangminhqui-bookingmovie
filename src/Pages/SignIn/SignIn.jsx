import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Header from "../../Components/Header/Header";
// import PhimService from '../../Service/axiosMovie';
// import { phimService, userService } from '../../Service/index,';
import { login } from "../../Redux/Actions/course";
import { connect, useDispatch } from "react-redux";
import "./Signin.css";
import Background from "../../asset/img/bgsigninsignup.png";
import { NavLink, useHistory } from "react-router-dom";
import { schemaSignin } from "../../Service/axiosSignupandSignin";
import Swal from "sweetalert2";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import * as yup from "yup";
function SignIn({ handleChange }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const styleSpacing = { margin: "15px 0" };
  const initialValue = {
    taiKhoan: "",
    matKhau: "",
  };
  const validationSchema = yup.object().shape({
    taiKhoan: yup
      .string()
      .trim("Khoảng trắng ko hợp lệ!")
      .strict(true)
      .required("Không đc để trống!"),
    matKhau: yup
      .string()
      .trim("Khoảng trắng ko hợp lệ!")
      .strict(true)
      .required("Không đc để trống!"),
  });
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(
      login(values, () => {
        Swal.fire({
          text: "Đăng nhập thành công !",
          title: "Thành công",
          icon: "success",
          confirmButtonText: "Tiếp tục",
        });
        history.replace("/");
      })
    );
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Đăng nhập</h2>
        </Grid>
        <Formik
          initialValues={initialValue}
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
                label="Tài khoản"
                placeholder="Enter username"
                fullWidth
              />
              <Field
                helperText={
                  <ErrorMessage name="matKhau">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
                as={TextField}
                name="matKhau"
                style={styleSpacing}
                label="Mật khẩu"
                placeholder="Enter password"
                type="password"
                fullWidth
              />

              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Đăng nhập
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          {" "}
          Bạn chưa có tài khoản ?{" "}
          <Link href="#" onClick={() => handleChange("event", 1)}>
            Đăng ký ngay
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default SignIn;
