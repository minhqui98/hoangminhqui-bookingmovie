import Axios from "axios";
class datVeService{
    datVeXemPhim=(data)=>{
        return Axios({
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
            method:"POST",
            data,
            headers:{"Authorization" : "Bearer " + localStorage.getItem("token")},
        })
    }
}
export default datVeService;