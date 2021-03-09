import Axios from "axios";
class LayDanhSachPhimService{
    layDanhSachTheoTen=(data)=>{
        return Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${data}`,
            method:"GET",
        })
    }
}
export default LayDanhSachPhimService;