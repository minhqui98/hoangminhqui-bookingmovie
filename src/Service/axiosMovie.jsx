import Axios from "axios";
class PhimService{
    LoadDanhSachPhim=()=>{
        return Axios({
            method:'GET',
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
            
        })
    };
    LoadDanhSachPhimResponsive=(page,limit)=>{
        return Axios({
            method:'GET',
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=${page}&soPhanTuTrenTrang=${limit}`,
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