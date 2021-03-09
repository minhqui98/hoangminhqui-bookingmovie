// import UserAxios from "./axiosSignup";

import UserService from "./axiosSignupandSignin";
import PhimService from "./axiosMovie";
import MovieSchedule from "./axiosMovieSchedule";
import BookTicket from "./axiosBookTicket";
import datVeService from "./axiosDatVe";
import UserInfo from "./axiosUserInfo";
import LayDanhSachPhimService from "./axiosLayDanhSachPhim";
import themPhimService from "./themPhimAxxios";
import deleteService from "./axiosDeleteMovie"
import layLichChieuService from "./axiosLayLichChieu";
export const userService = new UserService();
export const phimService = new PhimService();
export const movieSchedule = new MovieSchedule();
export const bookTicket = new BookTicket();
export const datVe = new datVeService();
export const userInfo = new UserInfo();
export const layDanhSachTheoTenService = new LayDanhSachPhimService();
export const themPhimServices = new themPhimService();
export const deletemovieservice = new deleteService();
export const layLichChieuServices = new layLichChieuService();

