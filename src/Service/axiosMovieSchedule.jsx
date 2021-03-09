import Axios from "axios";
// import { connect } from "react-redux";
class MovieScheduleService{
    LayDanhSachRap=()=>{
        return Axios({
            method:'GET',
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
        })
    }
    LayThongTinLichChieu=(id)=>{
        return Axios({
            method:'GET',
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP01`,
        })
    }
}

export default  MovieScheduleService;