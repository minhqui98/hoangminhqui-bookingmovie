import React, { Component } from 'react';
import { LayDanhSachRap, LayLichChieuTheoRap } from '../../Redux/Actions/course';
import { connect } from "react-redux";
import { courseAction } from '../../Redux/Actions';
import "./MovieSchedule.css";
import { NavLink } from "react-router-dom";
import moment from 'moment';
class MovieSchedule extends Component {

    onClickLayThongTinRap = (payLoad) => {

        this.props.dispatch(LayLichChieuTheoRap(payLoad))
        
    }
    onClickLayThongTinLichChieu = (payLoad) => {
        this.props.dispatch(courseAction("GET_LICH_CHIEU", payLoad))
        // console.log(payLoad,"vbvbv");
    }
    
    render() {

        return (
            <div className="container" id="cumRap">
                <h1 className="mb-5">Cụm rạp</h1>
                <div className="row border">
                    {/* hệ thống rạp */}
                    <div className="col-2 col-lg-1 p-0">
                        {this.props.movieSchedule.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img onClick={() => this.onClickLayThongTinRap(item.maHeThongRap)} role="button" className="logo" src={item.logo} width={60} height={60} alt="logo" />
                                </div>
                            )
                        })}
                    </div>
                    {/* cụm rạp */}
                    <div className="col-5 col-lg-6 p-0 border" style={{ height: 600, overflow: "auto" }}>
                        {this.props.movieScheduleDate.map((item, index) => {
                            return <div key={index}>
                                {item.lstCumRap.map((item1, index) => {
                                    return <div key={index}>
                                        <button onClick={() => this.onClickLayThongTinLichChieu(item1.danhSachPhim)} className="btn btn-light w-100 border-bottom mb-2">
                                            <div className="text-left d-flex">
                                                
                                                <img className="img-rap" src="https://s3img.vcdn.vn/123phim/2018/10/beta-cineplex-bien-hoa-15383839533027.jpg" alt="logo" width={50} height={50}/>
                                                <div className="ml-1">
                                                <span className="font-weight-bold text-success active">{item1.tenCumRap}</span><br />
                                                <span>Địa chỉ: {item1.diaChi}</span>
                                                </div>
                                                
                                            </div>
                                        </button>
                                    </div>
                                })}
                            </div>
                        })}
                        {/* {}  */}
                    </div>
                    {/* //lịch chiếu */}
                    <div className="col-5 col-lg-5 border" style={{ height: 600, overflow: "auto" }}>
                        {this.props.movieScheduleTime.length?this.props.movieScheduleTime.map((item, index) => {
                            return <div key={index}><div className="row justify-content-center p-2 border">
                                <div className="col-12 col-lg-2 mb-2">
                                    <img src={item.hinhAnh} width={50} height={51} alt="logo" />
                                </div>
                                <div className="col-12 col-lg-10">
                                    <span className="C13">C13</span> <span className="font-weight-bold"> {item.tenPhim}</span><br />
                                    <span>2D,3D Digital</span>
                                </div>
                                {item.lstLichChieuTheoPhim.map((item, index) => {
                                    return <div key={index}>
                                        <NavLink className="btn btn-light border m-2" to={this.props.credential ? `/bookticket/${item.maLichChieu}` : "/signin"}>{
                                        moment(item.ngayChieuGioChieu).format('LT')}</NavLink> </div>
                                })}
                                
                            </div>

                            </div>
                        }):<span className="text-danger font-weight-bold" style={{fontSize:"30px"}}>Vui lòng chọn cụm rạp</span>}
                    </div>
                </div>

            </div>
        );

    }


    componentDidMount = () => {
        this.props.dispatch(LayDanhSachRap());
        this.props.dispatch(LayLichChieuTheoRap("BHDStar"))

    }
}
const mapStateToProp = (state) => {
    return {
        movieSchedule: state.phim.movieSchedule,//state lấy danh sách phim
        // movieScheduleList: state.phim.movieScheduleList,
        movieScheduleDate: state.phim.movieScheduleDate,//state lấy thông tin địa chỉ rạp
        movieScheduleTime: state.phim.movieScheduleTime,//lấy lịch chiếu
        credential: state.phim.credential,
    }

}
export default connect(mapStateToProp)(MovieSchedule);