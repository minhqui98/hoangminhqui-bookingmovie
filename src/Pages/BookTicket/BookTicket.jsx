import React, { Component, useState,useEffect } from "react";
import Header from "../../Components/Header/Header";
// import Background from "../../asset/img/bookticket.jpg";
import "./BooktTicket.css";
import { connect, useDispatch, useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import { courseAction } from "../../Redux/Actions";
import { datVeMovie, LayThongTinPhongVe } from "../../Redux/Actions/course";
import MovieChair from "./MovieChair";
import LoadPage from "../../Components/LoadPage/LoadPage";
import {useParams} from "react-router-dom"

function BookTicket(props) {
  const dispatch = useDispatch();
  const params =useParams();
  const [isLoading, setIsLoading] = useState(false);
  const { credential, movieTicket, movieChair } = useSelector(
    (state) => state.phim
  );
  useEffect(()=>{
    dispatch(LayThongTinPhongVe(params.id));
    loadingPage();
    dispatch({type:"XOA_GHE"});
  },[params.id])
  const loadingPage = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(setIsLoading(true)), 1900);
    });
  };
  const onclickBookChair = (payLoad) => {
    dispatch(courseAction("GET_CHAIR", payLoad));
  };
  return (
    <div style={{ marginTop: "120px" }}>
      <Header />
      {isLoading ? (
        <div>
          <div className="bookticket-content my-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-9">
                  <div className="row">
                    <div className="col-6">
                      <h3 style={{ color:"crimson" }}>{movieTicket?.thongTinPhim.tenCumRap}</h3>
                      <h4 style={{ fontWeight: "bold",color:"crimson" }}>
                        {movieTicket?.thongTinPhim.tenRap}
                      </h4>
                    </div>
                    <div className="col-6">
                      <h1 style={{color:"crimson"}}>{movieTicket?.thongTinPhim.gioChieu}</h1>
                    </div>
                  </div>
                  <img
                    src="https://tix.vn/app/assets/img/icons/screen.png"
                    width="100%"
                    alt="manhinh"
                  />
                  <div className="row justify-content-center container-fluid m-0">
                    {movieTicket?.danhSachGhe.map((item, index) => {
                      return (
                        <div className="col-1 col-lg-1 p-0 d-block" key={index}>
                          <MovieChair
                            onclickBookChair={onclickBookChair}
                            chair={item}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="row mt-4 text-left">
                    <div className="col-12 col-lg-3">
                      <i className="fa fa-couch"></i>
                      <span> Ghế chưa đặt</span>
                    </div>
                    <div className="col-12 col-lg-3">
                      <i className="fa fa-couch text-danger"></i>
                      <span className="text-danger"> Ghế đã đặt</span>
                    </div>
                    <div className="col-12 col-lg-3">
                      <i className="fa fa-couch text-success"></i>
                      <span className="text-success"> Ghế đang đặt</span>
                    </div>
                    <div className="col-12 col-lg-3">
                      <i className="fa fa-couch text-primary"></i>
                      <span className="text-primary"> Ghế Vip</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="ticket-info border-bottom py-4">
                    <div className="row">
                      <div className="col-6">
                        <h5 className="font-weight-bold" style={{ color:"darkgreen" }}>
                          <span className="C13">C18</span> {movieTicket?.thongTinPhim.tenPhim}
                        </h5>
                        |<br />
                        <span style={{fontWeight:"bold"}}>{movieTicket?.thongTinPhim.tenCumRap}</span>
                        <br />|
                        <p className="font-weight-bold">
                          {movieTicket?.thongTinPhim.tenRap}
                        </p>
                        <p style={{fontWeight:"bold"}}>Giờ chiếu: {movieTicket?.thongTinPhim.gioChieu} PM</p>
                        <p style={{fontWeight:"bold"}}>Ngày {movieTicket?.thongTinPhim.ngayChieu}</p>
                      </div>
                      <div className="col-6">
                        <img
                          src={movieTicket?.thongTinPhim.hinhAnh}
                          width="100%"
                          height={250}
                          alt="abc"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="ticket-chair border-bottom py-4 text-left">
                    <span className="text-left">Ghế số: </span>
                    {movieChair.map((item, index) => {
                      return (
                        <span className="font-weight-bold" key={index}>
                          {item.tenGhe}{" "}
                        </span>
                      );
                    })}
                  </div>
                  <div className="ticket-user border-bottom py-4 text-left">
                    <span className="text-left">Email:</span>{" "}
                    <span className="font-weight-bold">{credential.email}</span>
                  </div>
                  <div className="ticket-user border-bottom py-4 text-left">
                    <span className="text-left">SĐT:</span>{" "}
                    <span className="font-weight-bold">{credential.soDT}</span>
                  </div>
                  <div className="tongTien text-left">
                    <span className="font-weight-bold ">Tổng tiền: </span>
                    <span style={{ fontSize: "30px",fontWeight:"bold" }} className="text-danger">
                      {movieChair
                        .reduce((tongTien, ghe, index) => {
                          return (tongTien += ghe.giaVe);
                        },0)
                        .toLocaleString()}{" "}
                      VNĐ
                    </span>
                  </div>
                  <div className="ticket-refund py-4 text-left">
                    <img
                      src="https://tix.vn/app/assets/img/icons/exclamation.png"
                      width={30}
                      height={30}
                      alt="bgh"
                    />
                    <span>
                      Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi
                      qua tin nhắn ZMS (tin nhắn Zalo) và Email đã nhập.
                    </span>
                  </div>

                  <div className="buttonBook">
                    {movieChair[0] ? (
                      <button
                        onClick={() => {
                          if (credential) {
                            let objectDatVe = {
                              maLichChieu: params.id,
                              danhSachVe: movieChair,
                              taiKhoanNguoiDung: credential.taiKhoan,
                            };
                            dispatch(datVeMovie(objectDatVe));
                          }
                        }}
                        className="btn btn-danger w-100 py-4"
                      >
                        Đặt vé
                      </button>
                    ) : (
                      <button className="btn btn-danger w-100 py-4" disabled>
                        Đặt vé
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <LoadPage></LoadPage>
      )}
    </div>
  );

}

export default BookTicket;
