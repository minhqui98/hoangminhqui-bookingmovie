import React, { Component } from "react";
import "./News.css";
class News extends Component {
  render() {
    return (
      <div>
        <div id="tinTuc">
          <div className="container pb-5 ">
            <div className="text-center">
              <img
                width="100%"
                height="100px"
                src="https://tix.vn/app/assets/img/icons/back-news.png"
                alt=""
              />
            </div>
            <ul className="nav nav-tabs navCenter" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link nav__unactive  active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home1"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Tin tức
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link nav__unactive"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile1"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Khuyến mại
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home1"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-12 col-lg-6 p-2">
                    <img
                      src="https://tix-truong.web.app/img/news/image1.png"
                      alt=""
                      width="100%"
                    />
                    <h5 className="newTitle">
                      <a href="#news">
                        Bán Đảo Peninsula là bom tấn xác sống không thể bỏ lỡ!
                      </a>
                    </h5>
                    <p>
                      Là phần phim khép lại bộ ba xác sống (Seoul Station, Train
                      to Busan - 2016) của đạo diễn Yeon Sang Ho, mới đây, bom
                      tấn Bán Đảo (Train to Busan 2/Peninsula) vừa chính thức
                      tung trailer hé lộ những tình tiết mới
                    </p>
                    <i className="fas fa-thumbs-up"></i>
                    <span className="pl-1 pr-2">1</span>
                    <i className="fas fa-comment"></i>
                    <span className="pl-1 pr-2">0</span>
                  </div>
                  <div className="col-12 col-lg-6 p-2">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2021/03/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png"
                      alt=""
                      width="100%"
                    />
                    <h5 className="newTitle">
                      <a href="#news">
                        ‘Tôi sẽ làm tất cả ngỡ ngàng bởi phiên bản tà ác của
                        mình’ - Song Ji Hyo
                      </a>
                    </h5>
                    <p className="subTitle">
                      Nhân dịp tác phẩm “Kẻ Xâm Nhập” giữ vững ngôi vương phòng
                      vé suốt gần một tuần trình chiếu tại quê nhà, ekip sản
                      xuất liền cho đăng tải poster cùng trailer đặc biệt, đồng
                      thời chia sẻ không ít thông tin lý thú
                    </p>
                    <i className="fas fa-thumbs-up"></i>
                    <span className="pl-1 pr-2">1</span>
                    <i className="fas fa-comment"></i>
                    <span className="pl-1 pr-2">0</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-4 p-2">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2021/03/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png"
                      alt=""
                      width="100%"
                    />
                    <h5 className="newTitle">
                      <a href="#news">
                        Bán Đảo Peninsula là bom tấn xác sống không thể bỏ lỡ!
                      </a>
                    </h5>
                    <p>
                      Là phần phim khép lại bộ ba xác sống (Seoul Station, Train
                      to Busan - 2016) của đạo diễn Yeon Sang Ho, mới đây, bom
                      tấn Bán Đảo (Train to Busan 2/Peninsula) vừa chính thức
                      tung trailer hé lộ những tình tiết mới
                    </p>
                    <i className="fas fa-thumbs-up"></i>
                    <span className="pl-1 pr-2">1</span>
                    <i className="fas fa-comment"></i>
                    <span className="pl-1 pr-2">0</span>
                  </div>
                  <div className="col-12 col-lg-4 p-2">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2020/08/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122361852.png"
                      alt=""
                      width="100%"
                    />
                    <h5 className="newTitle">
                      <a href="#news">
                      Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn
                      </a>
                    </h5>
                    <p>
                      Là phần phim khép lại bộ ba xác sống (Seoul Station, Train
                      to Busan - 2016) của đạo diễn Yeon Sang Ho, mới đây, bom
                      tấn Bán Đảo (Train to Busan 2/Peninsula) vừa chính thức
                      tung trailer hé lộ những tình tiết mới
                    </p>
                    <i className="fas fa-thumbs-up"></i>
                    <span className="pl-1 pr-2">1</span>
                    <i className="fas fa-comment"></i>
                    <span className="pl-1 pr-2">0</span>
                  </div>
                  <div className="col-12 col-lg-4 p-2">
                    <div className="d-flex align-items-center p-2">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2020/08/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png"
                        alt=""
                        width="60px"
                        height="60px"
                      />
                      <span className="px-2 newTitle">
                        <a href="#news">
                          6 đạo diễn tỉ đô làm nên thành công của những bom...
                          tấn đình đám nhất Hollywood
                        </a>
                      </span>
                    </div>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2020/08/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-15965999321682.png"
                        alt=""
                        width="60px"
                        height="60px"
                      />
                      <span className="px-2 newTitle">
                        <a href="#news">
                          Gái Già Lắm Chiêu V – Những cuộc đời vương giả
                        </a>
                      </span>
                    </div>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2020/07/kaity-nguyen-tro-thanh-my-nhan-moi-cua-vu-tru-gai-gia-lam-chieu-15959988694730.png"
                        alt=""
                        width="60px"
                        height="60px"
                      />
                      <span className="px-2 newTitle">
                        <a href="#news">
                          Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già
                          Lắm Chiêu
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile1"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <h6 className="text-center">Chưa có thông tin</h6>
              </div>
              <div
                className="tab-pane fade"
                id="discount"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <h6 className="text-center">Chưa có thông tin</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
