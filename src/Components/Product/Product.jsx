import React, { Component, useEffect } from "react";
import ProductItem from "./ProductItem";
import { connect, useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { fetchCourse } from "../../Redux/Actions/course";
import "./styles.css";
import { Spin } from "antd";
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';

// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
const settings = {
  // centerMode: true,
  infinite: true,
  // centerPadding: "50px",
  slidesToShow: 4,
  speed: 600,
  rows: 2,
  slidesPerRow: 1,
  autoplay: false,
  autoplaySpeed: 4000,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        arrows: false,
      },
    },
  ],
};

function Product(props) {
  const dispatch = useDispatch();
  const { ListPhim } = useSelector((state) => state.phim);
  useEffect(() => {
    dispatch(fetchCourse());
  }, []);

  return (
    <div id="product" className="PC_Screen">
      {/* <h1 style={{marginTop:"50px"}} className="my-5">Lịch chiếu</h1> */}
      <div className="container" style={{ marginTop: "100px" }}>
        <Spin spinning={ListPhim.length?false:true}/>
        <Slider {...settings}>
          {ListPhim.map((item, index) => {
            return (
              <div key={index}>
                <ProductItem phim={item} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Product;
