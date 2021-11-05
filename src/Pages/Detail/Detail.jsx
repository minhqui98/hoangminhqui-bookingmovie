import React, { Component, Fragment, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Header from "../../Components/Header/Header";
// import { courseAction } from '../../Redux/Actions';
import {
  fetchCourseDetail,
  LayDanhSachRap,
  LayLichChieuTheoMaPhim,
} from "../../Redux/Actions/course";
// import { phimService } from "../../Service/index,";
import { NavLink, useParams } from "react-router-dom";
import "./Detail.css";
// import { Tab, Tabs, Box, Typography } from "@material-ui/core";
import Footer from "../../Components/Footer/Footer";
import LoadPage from "../../Components/LoadPage/LoadPage";
import moment from "moment";
import { Tabs, Radio, Space } from "antd";
const { TabPane } = Tabs;

function Detail(props) {
  const dispatch = useDispatch();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const { detailPhim, movieSchedule, maRap, detailCal, credential } =
    useSelector((state) => state.phim);
    console.log(maRap);
  useEffect(() => {
    dispatch(fetchCourseDetail(params.id));
    dispatch(LayLichChieuTheoMaPhim("BHDStar"));
    loadingPage();
    dispatch(LayDanhSachRap());
  }, [params.id]);

  const loadingPage = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(setIsLoading(true)), 2800);
    });
  };
  const danhGiaPhim = () => {
    if (detailPhim?.danhGia === 10) {
      return (
        <div className="stars text-warning">
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
        </div>
      );
    }
    if (detailPhim?.danhGia >= 9 && detailPhim?.danhGia < 10) {
      return (
        <div className="stars">
          <span className="text-warning">
            <i className="fa fa-star"></i>
          </span>
          <span className="text-warning">
            <i className="fa fa-star"></i>
          </span>
          <span className="text-warning">
            <i className="fa fa-star"></i>
          </span>
          <span className="text-warning">
            <i className="fa fa-star"></i>
          </span>
          <span className="text-warning">
            <i className="fa fa-star-half-alt"></i>
          </span>
        </div>
      );
    }
    if (detailPhim?.danhGia >= 7 && detailPhim?.danhGia < 9) {
      return (
        <div className="stars">
          <span className="text-warning">
            <i className="fa fa-star"></i>
          </span>
          <span className="text-warning">
            <i className="fa fa-star"></i>
          </span>
          <span className="text-warning">
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
        </div>
      );
    }
    if (detailPhim?.danhGia >= 5 && detailPhim?.danhGia < 7) {
      return (
        <div className="stars">
          <span className="text-warning">
            <i className="fa fa-star"></i>
          </span>
          <span className="text-warning">
            <i className="fa fa-star"></i>
          </span>
          <span className="text-warning">
            <i className="fa fa-star-half-alt"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
        </div>
      );
    } else {
      return (
        <div className="stars">
          <span className="text-warning">
            <i className="fa fa-star"></i>
          </span>
          <span className="text-warning">
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
          <span>
            <i className="fa fa-star"></i>
          </span>
        </div>
      );
    }
  };
  const onClickLayMaRap = (payLoad) => {
    dispatch(LayLichChieuTheoMaPhim(payLoad));
  };
  const handleScroll = (id) => {
    const page = document.getElementById(id);
    if (page) {
      page.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <>
          <div
            className="detail-bakground"
            style={{
              backgroundImage: `url(${detailPhim?.hinhAnh})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <div className="background-overlay"></div>
            <div className="container detailInfo p-5">
              <div className="row">
                <div className="col-sm-12 col-lg-4">
                  <img
                    src={detailPhim?.hinhAnh}
                    style={{ width: "100%", height: 500 }}
                    alt="detail phim"
                  />
                </div>
                <div className="col-sm-12 col-lg-8 text-white text-left detail-font">
                  <div className="ngayChieu">
                    <p>
                      <strong>Ngày Khởi chiếu: </strong>
                      <span>
                        {moment(detailPhim?.ngayKhoiChieu).format("DD/MM/YYYY")}
                      </span>
                    </p>
                  </div>
                  <div className="tenPhim">
                    <h2 style={{color:"white"}}>
                      <span className="C18">C18</span> {detailPhim?.tenPhim}
                    </h2>
                  </div>
                  <p>
                    <b>Thời lượng:</b> 100 phút - 0 IMDb - 2D/Digita
                  </p>
                  <p className="moTa">
                    <b>Nội dung: </b>
                    {detailPhim?.moTa}
                  </p>
                  <p>
                    <b>Đánh giá: </b>
                    {detailPhim?.danhGia} điểm{danhGiaPhim()}
                  </p>
                  <button
                    onClick={() => handleScroll("lichChieu")}
                    className="btn btn-danger w-50"
                  >
                    Đặt vé
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            id="lichChieu"
            className="container-fluid "
            style={{
              background:
                "linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))",
              paddingTop: "100px",
            }}
          >
            <div className="detail_lichChieu container bg-light">
              <Tabs tabPosition="left">
                {movieSchedule.map((item, index) => {
                  return (
                    // <div key={index}>

                    // </div>
                    <TabPane
                      tab={
                        <img
                          onClick={() => onClickLayMaRap(item.maHeThongRap)}
                        //   className="logo active"
                          src={item.logo}
                          width={60}
                          height={60}
                          alt="logo"
                        />
                      }
                      key={index}
                    >
                      {!detailPhim?.lichChieu.filter(
                    (item) => item.thongTinRap.maHeThongRap === maRap
                  ).length ? (
                    <p
                      className="text-danger font-weight-bold"
                      style={{ fontSize: "30px" }}
                    >
                      Không có lịch chiếu vui lòng chọn rạp khác
                    </p>
                  ) : (
                    detailPhim?.lichChieu
                      .filter((item) => item.thongTinRap.maHeThongRap === maRap)
                      .map((item1, index) => {
                        return (
                          <div key={index}>
                            <h4>{item1.thongTinRap.tenCumRap}</h4>
                            <NavLink
                              to={
                                credential
                                  ? `/bookticket/${item1.maLichChieu}`
                                  : "/signin"
                              }
                            >
                              <button className="btn btn-primary" style={{fontWeight:"bold", width:"150px"}}>
                                {moment(item1.ngayChieuGioChieu).format("LT")}
                              </button>
                            </NavLink>
                          </div>
                        );
                      })
                  )}
                    </TabPane>
                  );
                })}
                {/* <TabPane tab="Tab 1" key="1">
                  Content of Tab 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                  Content of Tab 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                  Content of Tab 3
                </TabPane> */}
              </Tabs>
             
            </div>
          </div>
          <Footer></Footer>
        </>
      ) : (
        <LoadPage></LoadPage>
      )}
    </div>
  );
}

export default Detail;
