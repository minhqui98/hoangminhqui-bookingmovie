import { phimService, userService, movieSchedule, bookTicket, datVe, userInfo, layDanhSachTheoTenService, themPhimServices, deletemovieservice, layLichChieuServices } from "../../Service/index,";
import { courseAction } from '../../Redux/Actions';
import Swal from "sweetalert2";
// import LayDanhSachPhimService from "../../Service/axiosLayDanhSachPhim";
//danh sách phim
export const fetchCourse = () => {
    return (dispatch) => {
        phimService.LoadDanhSachPhim()
            .then((res) => {
                dispatch(courseAction("GET_PHIM", res.data))
            }).catch((err) => {
                console.log(err);
            })
    }
}
//chi tiết phim
export const fetchCourseDetail = (id) => {
    return (dispatch) => {
        phimService.LoadChiTietPhim(id)
            .then((res) => {
                dispatch(courseAction("GET_DETAIL", res.data))
            }).catch((err) => {
                console.log(err);
            })
    }
}
// lấy logo rap
export const LayDanhSachRap = () => {
    return (dispatch) => {
        movieSchedule.LayDanhSachRap()
            .then((res) => {
                dispatch(courseAction("GET_RAP", res.data))
            }).catch((err) => {
                console.log(err);
            })
    }
}
// lấy thông tin tên rạp, dịa chỉ,lịc chiếu
export const LayLichChieuTheoRap = (id) => {
    return (dispatch) => {
        movieSchedule.LayThongTinLichChieu(id)
            .then((res) => {
                dispatch(courseAction("GET_THONG_TIN_RAP", res.data))
            }).catch((err) => { console.log(err); })
    }
}
// lấy lịc chiếu heo mã
export const LayLichChieuTheoMaPhim = (id) => {
    console.log(id, "dsad");
    return (dispatch) => {
        dispatch((courseAction("GET_MA_RAP", id)))
    }
}
//đặt vé
export const LayThongTinPhongVe = (id) => {
    return (dispatch) => {
        bookTicket.LayDanhSachPhongVe(id)
            .then((res) => {
                dispatch(courseAction("GET_TICKKET", res.data))
            }).catch((err) => { console.log(err); })
    }
}
// đăng kí
export const signuppp = (data, callBack) => {
    return (userService.SignUp(data).then((res) => {
        Swal.fire({
            text: "Đăng kí thành công",
            title: "Thành Công",
            icon: "success", //error, sucess,warning,question
            confirmButtonText: "Tiếp tục",
        });
        callBack();

    }).catch((err) => {
        Swal.fire({
            text: "Tài khoản hoặc email đã tồn tại!",
            title: "Đã xảy ra lỗi!",
            icon: "error", //error, sucess,warning,question
            confirmButtonText: "Tiếp tục",
        });
    }))
}
// đăng nhâjp
export const login = (data, callBack) => {
    return (dispatch) => {
        userService.SignIn(data)
            .then((res) => {

                dispatch(courseAction("GET_CREDENTIAL", res.data)
                ); localStorage.setItem("cxvnbxcmn", JSON.stringify(res.data));
                localStorage.setItem("token", res.data.accessToken);

                //lưu vào localstorage
                callBack();
            })
            .catch((err) => {
                Swal.fire({
                    text: "Tài khoản hoặc mật khẩu không đúng!",
                    title: "Đã xảy ra lỗi!",
                    icon: "error", //error, sucess,warning,question
                    confirmButtonText: "Tiếp tục",
                });
            })
    }
}
//thoonh tin tài khảon

export const ThongTinTaiKhoan = (data) => {
    return (dispatch) => {
        userInfo.LayThongTinTaiKhoan(data)
            .then((res) => {
                dispatch(courseAction("GET_INFO", res.data))
            }).catch((err) => {
                console.log(err, "sadasdasd");
            })
    }
}
//dat ve button
export const datVeMovie = (data) => {
    // console.log(data,"ldaaaaaa");
    return (dispatch) => {
        datVe.datVeXemPhim(data)
            .then((res) => {
                dispatch(LayThongTinPhongVe(data.maLichChieu));
                const token = localStorage.getItem("cxvnbxcmn")
                dispatch(ThongTinTaiKhoan(token));

                dispatch({ type: "XOA_GHE" });
                Swal.fire({
                    text: "Đặt vé thành công!",
                    icon: "success",
                    confirmButtonText: "OK",
                }).then((confirm) => {
                    window.location.reload();
                })

            }).catch((err) => {
                console.log(err);
            })
    }
}
///lấy danh sách theo tên
export const layDanhSachTheoTen = (data) => {
    return (dispatch) => {
        layDanhSachTheoTenService.layDanhSachTheoTen(data).then((res) => {
            dispatch(courseAction("GET_DANH_SACH_PHIM", res.data))

            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }
}
//thêm phim
export const themPhimAction = (data, callBack) => {
    return (dispatch) => {
        themPhimServices.themPhim(data).then((res) => {
            console.log(res);
            callBack();
        }).catch((err) => {
            console.log({ ...err });
        })
    }
}
//xóa phim
export const xoaPhimAction = (id) => {
    console.log(id);
    return (dispatch) => {
        deletemovieservice.deleteMovie(id).then((res) => {
           console.log(res);
           Swal.fire({
            title: "Xóa thành công!",
            icon: "success", //error, success,warning,question
            confirmButtonText: "Tiếp tục",
        })
        }).catch((err) => {
            console.log(err);
            Swal.fire({
                title: "Xóa thất bại phim đã có lịch chiếu!",
                icon: "error", //error, success,warning,question
                confirmButtonText: "Tiếp tục",
            })
        })
    }
}
//láy lịch chiếu
export const layLichChieu = (id) => {
    return (dispatch) => {
        layLichChieuServices.layLichChieuAction(id).then((res) => {
            console.log(res)
            dispatch(courseAction("GET_LICH_CHIEU_NHANH",res.data))
        }).catch((err) => {
            console.log(err);
        })
    }
}
