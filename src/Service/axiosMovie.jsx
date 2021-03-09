import Axios from "axios";
class PhimService{
    LoadDanhSachPhim=()=>{
        return Axios({
            method:'GET',
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        })
    };
    LoadChiTietPhim=(id)=>{
        return Axios({
            method:'GET',
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
        })
    }
}
export default PhimService;