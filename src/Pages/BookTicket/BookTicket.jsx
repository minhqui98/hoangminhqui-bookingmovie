import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
// import Background from "../../asset/img/bookticket.jpg";
import "./BooktTicket.css";
import { connect } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import { courseAction } from '../../Redux/Actions';
import { datVeMovie, LayThongTinPhongVe } from '../../Redux/Actions/course';
import MovieChair from './MovieChair';
import LoadPage from '../../Components/LoadPage/LoadPage';

class BookTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }
    loadingPage = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.setState({ isLoading: true })), 1900);
        });
    }
    render() {
        const onclickBookChair=(payLoad)=>{
            this.props.dispatch(courseAction("GET_CHAIR",payLoad))
            // console.log(payLoad,"payyyyyysadasdasd");
        }
        // console.log(this.props.movieChair,"bí");
        return (
            <div>
                <Header />
                {this.state.isLoading?(<div><div className="bookticket-content my-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-lg-9">
                                <div className="row">
                                    <div className="col-6">
                                        <h3>{this.props.bookticket.thongTinPhim.tenCumRap}</h3>
                                        <p>{this.props.bookticket.thongTinPhim.tenRap} | {this.props.bookticket.thongTinPhim.gioChieu}</p>
                                    </div>
                                    <div className="col-6">
                                        <p>Thời gian giữ ghế</p>
                                    </div>
                                </div>
                                <img src="https://tix.vn/app/assets/img/icons/screen.png" width="100%" alt="manhinh"/>
                                <div className="row justify-content-center container-fluid m-0">
                                    {this.props.bookticket.danhSachGhe.map((item,index)=>{
                                        return <div className="col-2 col-lg-1 p-0 d-block" key={index}>
                                            <MovieChair onclickBookChair={onclickBookChair} chair={item}/>
                                        </div>
                                    })}
                                </div>
                                <div className="row mt-4">
                                    <div className="col-12 col-lg-4">
                                        <i className="fa fa-couch"></i><span> Ghế chưa đặt</span>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <i className="fa fa-couch text-danger"></i><span className="text-danger"> Ghế đã đặt</span>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <i className="fa fa-couch text-success"></i><span className="text-success">Ghế đang đặt</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3">
                                <div className="ticket-info border-bottom py-4">
                                    <div className="row">
                                        <div className="col-6">
                                            <h5 className="font-weight-bold"><span>C18</span> {this.props.bookticket.thongTinPhim.tenPhim}</h5>
                                    |<br />
                                            <span>{this.props.bookticket.thongTinPhim.tenCumRap}</span>
                                            <br />|
                                    <p className="font-weight-bold">{this.props.bookticket.thongTinPhim.tenRap}</p>
                                            <p>{this.props.bookticket.thongTinPhim.gioChieu}</p>
                                            <p>{this.props.bookticket.thongTinPhim.ngayChieu}</p>
                                        </div>
                                        <div className="col-6">
                                            <img src={this.props.bookticket.thongTinPhim.hinhAnh} width='100%' height={250} alt="abc"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="ticket-chair border-bottom py-4 text-left">
                                <span className="text-left">Ghế số: </span>{this.props.movieChair.map((item,index)=>{
                                    return <span className="font-weight-bold" key={index}>{item.tenGhe}  </span>
                                })}
                                </div>
                                <div className="ticket-user border-bottom py-4 text-left">
                                    <span className="text-left">Email:</span> <span className="font-weight-bold">{this.props.credential.email}</span>
                                </div>
                                <div className="ticket-user border-bottom py-4 text-left">
                                    <span className="text-left">SĐT:</span> <span className="font-weight-bold">{this.props.credential.soDT}</span>
                                </div>
                                <div className="tongTien">
                                    <span className="font-weight-bold">Tổng tiền: </span><span style={{fontSize:"40px"}} className="text-success">{this.props.movieChair.reduce((tongTien,ghe,index)=>{
                                        return tongTien+=ghe.giaVe;
                                    },0).toLocaleString()} VNĐ</span>
                                </div>
                                <div className="ticket-refund py-4 text-left">
                                    <img src="https://tix.vn/app/assets/img/icons/exclamation.png" width={30} height={30} alt="bgh"/>
                                    <span>Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo) và Email đã nhập.</span>
                                </div>
                                
                                <div className="buttonBook">
                                    {this.props.movieChair[0]?<button onClick={()=>{
                                        if(this.props.credential){
                                            let objectDatVe={
                                                maLichChieu:this.props.match.params.id,
                                                danhSachVe:this.props.movieChair,
                                                taiKhoanNguoiDung:this.props.credential.taiKhoan,
                                            }
                                            this.props.dispatch(datVeMovie(objectDatVe))
                                        }
                                    }} className="btn btn-danger w-100 py-4">Đặt vé</button>:(<button className="btn btn-danger w-100 py-4" disabled>Đặt vé</button>)}
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer /></div>):(<LoadPage></LoadPage>)}
                
            </div>
        );
    }
    
    componentDidMount = () => {
        this.props.dispatch(LayThongTinPhongVe(this.props.match.params.id))
        this.loadingPage();
    }

}
const mapStateToProps = (state) => {
    return {
        credential: state.phim.credential ||{
            email:"",
        },
        bookticket: state.phim.movieTicket || {
            thongTinPhim: "",
            tenCumRap: "",
            danhSachGhe: [],
            tenGhe: "",
            maGhe: "",
            gioChieu: "",
            ngayChieu: "",
        },
        movieChair:state.phim.movieChair,
        
    }
}

export default connect(mapStateToProps)(BookTicket);