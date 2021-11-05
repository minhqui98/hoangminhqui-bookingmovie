import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import user from "../../asset/img/usser.png";
import { courseAction } from "../../Redux/Actions";
import Logo from "../../asset/img/tix.png";
// import { Link } from "react-scroll";
import { ThongTinTaiKhoan } from "../../Redux/Actions/course";
import { Button, Popover, Typography, Avatar, Modal } from "@material-ui/core";
// import {LogoutOutlinedIcon}  from '@material-ui/icons';
import LoadingOutlined from "@ant-design/icons";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Wrapper,
  Boxs,
} from "./Header.styles";
import moment from "moment";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { Divider } from "antd";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  backgroundColor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "20px",
  height: "500px",
  overflow: "auto",
  p: 4,
};
function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { credential, userInfor } = useSelector((state) => state.phim);
  console.log(userInfor);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    LayInfo();
    let local = JSON.parse(localStorage.getItem("cxvnbxcmn"));
    if (local) {
      dispatch(ThongTinTaiKhoan(local));
    }
  }, [credential]);
  const LayInfo = () => {
    if (credential) {
      dispatch(ThongTinTaiKhoan(credential));
    }
  };
  const handleOpenModal = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  const handleScroll = (id) => {
    const page = document.getElementById(id);
    if (page) {
      page.scrollIntoView({ behavior: "smooth" });
    }
  };

  const deleteLocalStorage = () => {
    localStorage.removeItem("cxvnbxcmn");
    localStorage.removeItem("token");
    dispatch(courseAction("GET_CREDENTIAL", null));
    dispatch({ type: "XOA_GHE" });
    history.push("/");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignOut = () => {
    Swal.fire({
      title: "Bạn chắc chắn muốn đăng xuất ?",
      icon: "info", //error, success,warning,question
      confirmButtonText: "Chắc chắn",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteLocalStorage();
      }
    });
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  function tinhTongTien(){
    
  }
  return (
    <>
      <Nav>
        <NavLink flag={true} to="/">
          <img src={Logo} width={50} height={50} alt="logo" />
        </NavLink>
        <Bars onClick={handleClick} />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Lịch chiếu
          </NavLink>
          <NavLink onClick={() => handleScroll("cumRap")} to="/" activeStyle>
            Cụm rạp
          </NavLink>
          <NavLink onClick={() => handleScroll("tinTuc")} to="/" activeStyle>
            Tin tức
          </NavLink>
          <NavLink onClick={() => handleScroll("ungDung")} to="/" activeStyle>
            Ứng dụng
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          {credential ? (
            <>
              <Avatar
                onClick={handleOpenModal}
                style={{ marginRight: 10, cursor: "pointer" }}
                alt="Remy Sharp"
                src={user}
              />{" "}
              <Button
                onClick={handleSignOut}
                color="secondary"
                variant="contained"
              >
                {" "}
                Đăng xuất
              </Button>
            </>
          ) : (
            <Button color="primary" variant="contained">
              <NavBtnLink to="/signin">Đăng nhập</NavBtnLink>
            </Button>
          )}
        </NavBtn>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography style={{ padding: "25px 0" }} sx={{ p: 2 }}>
            <NavLink to="/#" activeStyle>
              Lịch chiếu
            </NavLink>
            <NavLink onClick={() => handleScroll("cumRap")} to="/#" activeStyle>
              Cụm rạp
            </NavLink>
            <NavLink onClick={() => handleScroll("tinTuc")} to="/#" href="cumRap" activeStyle>
              Tin tức
            </NavLink>
            <NavLink onClick={() => handleScroll("ungDung")} style={{ marginBottom: "10px" }} to="/#" activeStyle>
              Ứng dụng
            </NavLink>
            {credential ? (
              <>
                <Button onClick={handleOpenModal}>
                  <Avatar
                    onClick={handleOpenModal}
                    alt="Remy Sharp"
                    src={user}
                  />
                </Button>
                <Button
                  style={{ marginRight: 10 }}
                  color="secondary"
                  variant="contained"
                >
                  Đăng xuất
                </Button>
              </>
            ) : (
              <NavBtn flag={true}>
                <Button
                  style={{ marginLeft: 20 }}
                  color="primary"
                  variant="contained"
                >
                  <NavBtnLink to="/signin">Đăng nhập</NavBtnLink>
                </Button>
              </NavBtn>
            )}
          </Typography>
        </Popover>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Boxs style={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Thông tin tài khoản
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Họ tên : {userInfor?.hoTen}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Email : {userInfor?.email}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Số điện thoại : {userInfor?.soDT}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Thông tin đặt vé :
            </Typography>
            {userInfor?.thongTinDatVe.map((item) => (
              <>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{color:"crimson" ,fontWeight:"bold"}}>
                  Ngày {" "}
                  {moment(item.ngayDat).format("DD/MM/YYYY")}{" "}
                  {moment(item.ngayDat).format("LT")}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Tên phim:{" "}
                  <span style={{ fontWeight: "bold" }}>{item.tenPhim}</span> 
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  - Cụm Rạp:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {item.danhSachGhe[0]["tenHeThongRap"]} (
                    {item.danhSachGhe[0]["tenCumRap"]})
                  </span>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  - Ghế:{" "}
                  {item.danhSachGhe.map((item) => (
                    <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                      {item.tenGhe}
                    </span>
                  ))}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{textAlign:"center"}}>
                  
                </Typography>
                <Divider>*****</Divider>
              </>
            ))}
          </Boxs>
        </Modal>
      </Nav>
    </>
  );

  // componentDidMount() {
  //   // console.log(this.props.userInfo,"op");
  //   // this.LayInfo();
  //   let local=JSON.parse(localStorage.getItem("cxvnbxcmn")) ;
  //   if(local)
  //   {
  //     this.props.dispatch(ThongTinTaiKhoan(local))
  //   }

  // }
}
// const mapStateToProp = (state) => {
//   return {
//     credential: state.phim.credential,
//     movieChair: state.phim.movieChair,
//     userInfo: state.phim.userInfor||{
//       hoTen:"",
//       soDT:"",
//       email:"",
//       thongTinDatVe:[],
//       danhSachGhe:[]
//     },
//   }
// }
export default Header;

// export default connect(mapStateToProp)(Header);
