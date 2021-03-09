import React, { Component,Fragment } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./Header.css";
import { courseAction } from '../../Redux/Actions';
import Logo from "../../asset/img/tix.png";
// import { Link } from "react-scroll";
import { ThongTinTaiKhoan } from '../../Redux/Actions/course';

class Header extends Component {
  LayInfo = () => {
    if (this.props.credential) {
      this.props.dispatch(ThongTinTaiKhoan(this.props.credential))
    }
  }
  handleScroll=(id)=>{
    const page=document.getElementById(id)
    if(page){
      page.scrollIntoView({behavior:"smooth"})
    }
   }
  render() {
    const deleteLocalStorage = () => {
      localStorage.removeItem("cxvnbxcmn");
      localStorage.removeItem("token");
      this.props.dispatch(courseAction("GET_CREDENTIAL", null));
      this.props.dispatch({ type: "XOA_GHE" });
    }
   

    return (
      <>   
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          {/* <div className="container"> */}
          <NavLink className="navbar-brand" to="/"><img src={Logo} width={50} height={50} alt="logo" /></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-white">Trang chủ</NavLink>
              </li>
              <li className="nav-item">
               <NavLink className="nav-link text-white" to="/" onClick={()=>this.handleScroll("product")}>Lịch chiếu</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link text-white" to="/" onClick={()=>this.handleScroll("cumRap")}>Cụm rạp</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link text-white" to="/" onClick={()=>this.handleScroll("tinTuc")}>Tin tức</NavLink>
              </li>
              {this.props.credential ? (<li className="nav-item"><span className="nav-link text-white">Hi,<span type="button" data-toggle="modal" data-target="#exampleModal2" className="text-primary">{this.props.credential.hoTen}</span><NavLink to="/" className="btn btn-primary" onClick={() => deleteLocalStorage()}>Thoát</NavLink></span></li>) : (<>
              <li className="nav-item"
              ><NavLink to="/signin" className="btn btn-primary btn-block">Đăng nhập</NavLink>
              </li></>)}
            </ul>
          </div>
        </nav>
      </div>
          <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Thông tin tài khoản</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                
                  <h4>Họ Tên: </h4><p>{this.props.userInfo.hoTen}</p>
                  <h4>Số ĐT </h4><p>{this.props.userInfo.soDT}</p>
                  <h4>Email: </h4><p>{this.props.userInfo.email}</p>
                  <h4>Lịch sử đặt vé:</h4>
                  {this.props.userInfo.thongTinDatVe.map((item,index)=>{
                    return <> <div key={index} className="row">
                      <div className="col-6">
                          <h4>Tên phim: </h4><p>{item.tenPhim}</p>
                          <h4>Ngày đặt: </h4><p>{item.ngayDat}</p>
                          {/* <h4>Tổng tiền:</h4><p>{item.reduce((tongTien,gia,index)=>{return tongTien+=gia.giaVe},0)}</p> */}
                          <h4>{item.giaVe}</h4>
                      </div>
                      <div className="col-6">
                      <span>Ghế đã đặt:</span> {item.danhSachGhe.map((item1,index)=>{
                          return <div key={index}>
                            <span>{item1.tenGhe}</span>
                          </div>
                        })}
                        
                      </div>
                    </div>
                    
</>
                  })}
                
              </div>
            </div>
          </div>
        </div>
        </>    
    );
  }
  
  componentDidMount() {
    // console.log(this.props.userInfo,"op");
    // this.LayInfo();   
    let local=JSON.parse(localStorage.getItem("cxvnbxcmn")) ;
    if(local)
    {
      this.props.dispatch(ThongTinTaiKhoan(local))
    }
    
    
  }
}
const mapStateToProp = (state) => {
  return {
    credential: state.phim.credential,
    movieChair: state.phim.movieChair,
    userInfo: state.phim.userInfor||{
      hoTen:"",
      soDT:"",
      email:"",
      thongTinDatVe:[],
      danhSachGhe:[]
    },
  }
}
export default connect(mapStateToProp)(Header);