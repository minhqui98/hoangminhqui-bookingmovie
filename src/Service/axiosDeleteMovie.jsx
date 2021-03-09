import Axios from "axios";
class deleteService{
    deleteMovie = (id)=>{
        return Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${id}`,
            method:"DELETE",
            headers:{"Authorization" : "Bearer " + localStorage.getItem("token")},
        })
    }
}
export default deleteService;