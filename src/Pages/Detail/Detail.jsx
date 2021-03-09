import React, { Component,Fragment } from 'react';
import { connect } from "react-redux";
import Header from '../../Components/Header/Header';
// import { courseAction } from '../../Redux/Actions';
import { fetchCourseDetail, LayDanhSachRap, LayLichChieuTheoMaPhim } from '../../Redux/Actions/course';
// import { phimService } from "../../Service/index,";
import { NavLink } from "react-router-dom";
import "./Detail.css";
import Footer from '../../Components/Footer/Footer';
// import { courseAction } from '../../Redux/Actions';
import LoadPage from '../../Components/LoadPage/LoadPage';
import moment from 'moment';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }
    loadingPage = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.setState({ isLoading: true })), 2800);
        });
    }
    danhGiaPhim = () => {
        if (this.props.detail.danhGia === 10) {
            return <div className="stars text-warning">
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>

            </div>
        }
        if (this.props.detail.danhGia >= 9 && this.props.detail.danhGia < 10) {
            return <div className="stars">
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span className="text-warning"><i className="fa fa-star-half-alt"></i></span>

            </div>
        }
        if(this.props.detail.danhGia >= 7 && this.props.detail.danhGia < 9)
        {
            return <div className="stars">
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                
            </div>
        }
        if(this.props.detail.danhGia >=5  && this.props.detail.danhGia < 7)
        {
            return <div className="stars">
            <span className="text-warning"><i className="fa fa-star"></i></span>
            <span className="text-warning"><i className="fa fa-star"></i></span>
            <span className="text-warning"><i className="fa fa-star-half-alt"></i></span>
            <span><i className="fa fa-star"></i></span>
            <span><i className="fa fa-star"></i></span>
            
        </div>
        }else{
            return <div className="stars">
            <span className="text-warning"><i className="fa fa-star"></i></span>
            <span className="text-warning"><i className="fa fa-star"></i></span>
            <span><i className="fa fa-star"></i></span>
            <span><i className="fa fa-star"></i></span>
            <span><i className="fa fa-star"></i></span>
            
        </div>
        }
    }
    handleScroll=(id)=>{
        const page=document.getElementById(id)
        if(page){
          page.scrollIntoView({behavior:"smooth"})
        }
       }
    render() {
        return (
            <div>
                <Header />
                {this.state.isLoading?(<><div className="detail-bakground" style={{ backgroundImage: `url(${this.props.detail.hinhAnh})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "1000px" }}>
                    <div className="background-overlay">
                    </div>
                    <div className="container detailInfo mt-5">
                    <div className="row">
                        <div className="col-sm-12 col-lg-4">
                            <img src={this.props.detail.hinhAnh} style={{ width: "100%", height: 500 }} alt="detail phim" />
                        </div>
                        <div className="col-sm-12 col-lg-8 text-white text-left detail-font">
                            <div className="ngayChieu">
                                <p><strong>Ngày Khởi chiếu: </strong><span>{this.props.detail.ngayKhoiChieu}</span></p>
                            </div>
                            <div className="tenPhim"><h2><span className="C18">C18</span> {this.props.detail.tenPhim}</h2></div>
                            <p><b>Thời lượng:</b>  100 phút - 0 IMDb - 2D/Digita</p>
                            <p><b>Nội dung: </b>{this.props.detail.moTa}</p>
                            <p><b>Đánh giá: </b>{this.props.detail.danhGia} điểm{this.danhGiaPhim()}</p>
                            <button onClick={()=>this.handleScroll("lichChieu")} className="btn btn-danger w-50">Đặt vé</button>
                        </div>
                    </div>
                </div>
                </div>
                
                <div id="lichChieu" className="container-fluid " style={{ background: "linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))" ,paddingTop:"100px"}}>
                    <div className="detail_lichChieu container bg-light">
                        <div className="row">
                            <div className="col-2">
                                {this.props.movieSchedule.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <img onClick={() => this.onClickLayMaRap(item.maHeThongRap)} className="logo active" src={item.logo} width={60} height={60} alt="logo" />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="col-10" style={{ height: 600, overflow: "auto" }}>
                                {!this.props.detail.lichChieu.filter(item => item.thongTinRap.maHeThongRap === this.props.maRap).length ? <p className="text-danger font-weight-bold" style={{ fontSize: "30px" }}>Không có lịch chiếu vui lòng chọn rạp khác</p> : this.props.detail.lichChieu.filter(item => item.thongTinRap.maHeThongRap === this.props.maRap).map((item1, index) => {
                                    return <div key={index}>
                                        <h4>{item1.thongTinRap.tenCumRap}</h4>
                                        <NavLink to={this.props.credential ? `/bookticket/${item1.maLichChieu}` : "/signin"}><button className="btn btn-secondary">{ moment(item1.ngayChieuGioChieu).format('LT')}</button></NavLink>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer /></>):(<LoadPage></LoadPage>)}
            </div>
        );
    }

    onClickLayMaRap = (payLoad) => {
        this.props.dispatch(LayLichChieuTheoMaPhim(payLoad))

    }
    componentDidMount() {
        this.props.dispatch(fetchCourseDetail(this.props.match.params.id));
        this.loadingPage();
        // window.scrollTo(0, 0);
        this.props.dispatch(LayDanhSachRap());

    }
}
const mapStateToProp = (state) => {
    return {
        detail: state.phim.detailPhim
            || {
            hinhAnh: '',
            tenPhim: '',
            moTa: '',
            ngayKhoiChieu: '',
            danhGia: '',
            lichChieu: [],
            thongTinRap: '',
            maHeThongRap: '',
            // tenCumRap:'':
            // ngayChieuGioChieu:'',
            // maRap:'',
        },
        movieSchedule: state.phim.movieSchedule,
        maRap: state.phim.maRap,
        detailCal: state.phim.detailCal,
        credential: state.phim.credential,
    }
}

export default connect(mapStateToProp)(Detail);


