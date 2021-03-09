import Axios from "axios";
class layLichChieuService{
    layLichChieuAction=(id)=>{
        return Axios({
            method:'GET',
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`
        })
    }
}
export default layLichChieuService;