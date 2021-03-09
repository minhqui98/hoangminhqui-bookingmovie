import React, { Component } from 'react';
import SearchMovie from './Search/SearchMovie';
import { connect } from "react-redux";
import { fetchCourse, xoaPhimAction } from '../../Redux/Actions/course';
import "./style.css";
import ThemPhim from './ThemPhim/ThemPhim';
// import { xoaPhimAction } from "../../Redux/Actions/course";

class Usermovie extends Component {

    onclickXoaPhim=(payLoad)=>{
        this.props.dispatch(xoaPhimAction(payLoad))
}
    render() {
        return (
            <div className="container-fluid">
                <h1>Quản Lý Phim</h1>
                        <ThemPhim></ThemPhim>
                    <div><h1>Tìm phim</h1><SearchMovie></SearchMovie></div>
                
                <table className="table mt-5">
                    <thead>
                        <tr className="table-active">
                            <th>Mã phim</th>
                            <th>Tên phim</th>
                            <th>Trailer</th>
                            <th>Hình Ảnh</th>
                            <th>Đánh giá</th>
                            <th>Mô tả</th>
                            <th>Ngày khởi chiếu</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    
                        {this.props.Phim.map((item, index) => {
                            return <tbody key={index}>
                                <tr>
                                    <td>{item.maPhim}</td>
                                    <td>{item.tenPhim}</td>
                                    <td>{item.trailer}</td>
                                    <td>
                                        <img src={item.hinhAnh} width="100px" height="65px" alt={item.tenPhim} />
                                    </td>
                                    <td>{item.danhGia}</td>
                                    <td className="trBreak">{item.moTa}</td>
                                    <td>{item.ngayKhoiChieu}</td>
                                    <td><button className="btn btn-danger" onClick={()=>this.onclickXoaPhim(item.maPhim)}>Xóa</button></td>
                                </tr>
                            </tbody>
                        })}
                    
                </table>
            </div>
        );
    }
    componentDidMount() {
        this.props.dispatch(fetchCourse())
    }
}
const mapStateToProps = (state) => {
    return {
        // danhSachTheoTen: state.phim.danhSachPhim,
        Phim: state.phim.ListPhim,
    }

}
export default connect(mapStateToProps)(Usermovie);