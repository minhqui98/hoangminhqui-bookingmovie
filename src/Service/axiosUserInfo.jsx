import Axios from "axios";
class UserInfo{
    LayThongTinTaiKhoan=(data)=>{
        return Axios({
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
            method:'POST',
            data,
            headers:{"Authorization":"Bearer " + localStorage.getItem("token")},  
        })
    }
}
export default UserInfo;