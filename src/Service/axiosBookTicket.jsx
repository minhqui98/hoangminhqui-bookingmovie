import Axios from "axios";
class BookTicketService{
    LayDanhSachPhongVe=(id)=>{
       
        return Axios({
            method:'GET',
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
        })
    }
}
export default BookTicketService;