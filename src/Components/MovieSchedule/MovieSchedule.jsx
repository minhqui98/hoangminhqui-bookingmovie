import React, { Component, useEffect, useState } from "react";
import {
  LayDanhSachRap,
  LayLichChieuTheoRap,
} from "../../Redux/Actions/course";
import { connect, useDispatch, useSelector } from "react-redux";
import { courseAction } from "../../Redux/Actions";
import "./MovieSchedule.css";
import { NavLink } from "react-router-dom";
import moment from "moment";
function MovieSchedule(props) {
  const dispatch = useDispatch();
  const { movieSchedule, movieScheduleDate, movieScheduleTime, credential } =
    useSelector((state) => state.phim);
  const [idName, setIdName] = useState("BHDStar");
  const onClickLayThongTinRap = (payLoad) => {
    setIdName(payLoad);
    dispatch(LayLichChieuTheoRap(payLoad));

    dispatch(courseAction("GET_LICH_CHIEU", []));
  };
  const onClickLayThongTinLichChieu = (payLoad) => {
    dispatch(courseAction("GET_LICH_CHIEU", []));
    setTimeout(() => {
      dispatch(courseAction("GET_LICH_CHIEU", payLoad));
    }, 50);
  };
  console.log(movieScheduleDate);
  useEffect(() => {
    async function fetchDAta() {
      dispatch(LayDanhSachRap());
      let response = await dispatch(LayLichChieuTheoRap(idName));
      console.log(response);
      // if(response ){
      //     dispatch(courseAction("GET_LICH_CHIEU", movieScheduleDate[0]?.lstCumRap[0]["danhSachPhim"]))
      // }
    }
    fetchDAta();
    dispatch(courseAction("GET_LICH_CHIEU", []))
  }, []);

  return (
    <div className="container" id="cumRap">
      {/* <h1 className="mb-5">Cụm rạp</h1> */}
      <div className="row border mt-5">
        {/* hệ thống rạp */}
        <div className="col-2 col-lg-1 p-0">
          {movieSchedule.map((item, index) => {
            return (
              <div key={index}>
                <img
                  onClick={() => onClickLayThongTinRap(item.maHeThongRap)}
                  role="button"
                  className="logo"
                  src={item.logo}
                  width={60}
                  height={60}
                  alt="logo"
                />
              </div>
            );
          })}
        </div>
        {/* cụm rạp */}
        <div
          className="col-5 col-lg-6 p-0 border"
          style={{ height: 600, overflow: "auto" }}
        >
          {movieScheduleDate.map((item, index) => {
            return (
              <div key={index}>
                {item.lstCumRap.map((item1, index) => {
                  return (
                    <div key={index}>
                      <button
                        onClick={() =>
                          onClickLayThongTinLichChieu(item1.danhSachPhim)
                        }
                        className="btn btn-light w-100 border-bottom mb-2"
                      >
                        <div className="text-left d-flex">
                          <img
                            className="img-rap"
                            src="https://s3img.vcdn.vn/123phim/2018/10/beta-cineplex-bien-hoa-15383839533027.jpg"
                            alt="logo"
                            width={50}
                            height={50}
                          />
                          <div className="ml-1">
                            <span className="font-weight-bold active">
                              {item1.tenCumRap}
                            </span>
                            <br />
                            <span>Địa chỉ: {item1.diaChi}</span>
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          })}
          {/* {}  */}
        </div>
        {/* //lịch chiếu */}
        <div
          className="col-5 col-lg-5 border"
          style={{ height: 600, overflow: "auto" }}
        >
          {movieScheduleTime?.length ? (
            movieScheduleTime.map((item, index) => {
              return (
                <div key={index}>
                  <div className="row p-2 border">
                    <div className="col-12 col-lg-2 mb-2">
                      <img
                        src={item.hinhAnh}
                        width={50}
                        height={51}
                        alt="logo"
                      />
                    </div>
                    <div className="col-12 col-lg-10 text-left">
                      <span className="C13">C13</span>{" "}
                      <span className="font-weight-bold"> {item.tenPhim}</span>
                      <br />
                    </div>
                    {item.lstLichChieuTheoPhim.map((item, index) => {
                      return (
                        <div key={index}>
                          <NavLink
                            style={{ width: "110px", fontWeight: "bold" }}
                            className="btn btn-warning border m-2"
                            to={
                              credential
                                ? `/bookticket/${item.maLichChieu}`
                                : "/signin"
                            }
                          >
                            {moment(item.ngayChieuGioChieu).format("LT")}
                          </NavLink>{" "}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            <span
              className="text-danger font-weight-bold"
              style={{ fontSize: "30px" }}
            >
              Vui lòng chọn cụm rạp
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
export default MovieSchedule;
