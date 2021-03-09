import React, { Component } from 'react';
import Slider from "react-slick";
import "./AppDownLoad.css";
class AppDownLoad extends Component {
    render() {
        const settings1 = {
            rows: 1,
            dots: false,
            infinite: true,
            speed: 1000,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            // responsive: [
            //    {
            //       breakpoint: 1199,
            //       settings: {
            //          slidesToShow: 4,
            //          slidesToScroll: 2,
            //       },
            //    },
            //    {
            //       breakpoint: 991,
            //       settings: {
            //          slidesToShow: 3,
            //          slidesToScroll: 2,
            //       },
            //    },
            //    {
            //       breakpoint: 767,
            //       settings: {
            //          slidesToShow: 2,
            //          slidesToScroll: 2,
            //       },
            //    },
            //    {
            //       breakpoint: 568,
            //       settings: {
            //          rows: 1,
            //          slidesToShow: 1,
            //          slidesToScroll: 1,
            //       },
            //    },
            //    // You can unslick at a given breakpoint now by adding:
            //    // settings: "unslick"
            //    // instead of a settings object
            // ],
         };
        return (
            <div>
                 <div className="aboutApp">
            <div className="container">
               <div className="row">
                  <div className="col-6 aboutLeft">
                     <h2>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
                     <p className="my-4">
                        Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm
                        điểm rạp và đổi quà hấp dẫn.
                     </p>
                     <button className=" btn btn-danger my-4">
                        App miễn phí - Tải về ngay!
                     </button>
                     <p>
                        TIX có hai phiên bản{" "}
                        <a href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197">
                           IOS
                        </a>{" "}
                        &{" "}
                        <a href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">
                           Android
                        </a>
                     </p>
                  </div>
                  <div className="col-6 aboutRight">
                     <img
                        src="https://tix.vn/app/assets/img/icons/mobile.png"
                        alt=""
                        width="100%"
                        className="rearPhone img-responsive"
                     />
                     <div className="slideScreen">
                        <Slider {...settings1}>
                           <div>
                              <img
                                 src="https://tix.vn/app/assets/img/icons/slide/slide1.jpg"
                                 alt=""
                                 width="100%"
                              />
                           </div>
                           <div>
                              <img
                                 src="https://tix.vn/app/assets/img/icons/slide/slide2.jpg"
                                 alt=""
                                 width="100%"
                              />
                           </div>{" "}
                           <div className="radiusImg">
                              <img
                                 src="https://tix.vn/app/assets/img/icons/slide/slide3.jpg"
                                 alt=""
                                 width="100%"
                              />
                           </div>
                        </Slider>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      
            </div>
        );
    }
}

export default AppDownLoad;