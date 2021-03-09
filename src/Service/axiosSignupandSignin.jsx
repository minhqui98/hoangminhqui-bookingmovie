import Axios from "axios";
import * as yup from "yup";
export const schemaSignUp=yup.object().shape({
    taiKhoan:yup.string().required("Không đc để trống !"),
    matKhau:yup.string().required("Kko dc để trống!"),
    hoTen:yup.string().required("Ko đc để trống!").matches(/^[A-Za-z ]*$/,"Họ tên phải là chữ !"),
    email:yup.string().required("Ko dc để trống!").email("Email ko hợp lệ!"),
    soDT:yup.string().required("Ko đc để trống!").matches(/^[0-9]+$/,"Số điện thoại phải là số !"),
    maNhom:yup.string().required("Ko đc để trống!")
})
export const schemaSignin=yup.object().shape({
    taiKhoan:yup.string().required("Không được để trống !"),
    matKhau:yup.string().required("Không được để trống !"),
})
class UserService {
    SignUp=(data)=>{
        return Axios({
            method:"POST",
            data,
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        })
    }
    SignIn=(data)=>{
        return Axios({
            method:"POST",
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data,
        })
    }
}
export default UserService;