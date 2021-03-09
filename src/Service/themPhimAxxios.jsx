import Axios from "axios";
class themPhimService{
    themPhim=(data)=>{
       
        return Axios({
            method:'POST',
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
            // url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
            data,
            // headers:{"Authorization" : "Bearer " + localStorage.getItem("token")},
        })
    }
}
export default themPhimService;