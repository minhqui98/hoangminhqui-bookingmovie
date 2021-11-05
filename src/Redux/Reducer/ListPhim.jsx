let initialState = {
  ListPhim: [],
  lichChieuPhim: {},
  detailPhim: null,
  credential: null,
  movieSchedule: [],
  movieScheduleDate: [],
  movieScheduleTime: [],
  movieTicket: null,
  movieChair: [],
  token: "",
  userInfor: null,
  maRap: "BHDStar",
  loading: false,
  // danhSachPhim:[],
};
const ListPhim = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PHIM":
      state.ListPhim = action.payLoad;
      return { ...state };
    case "GET_DETAIL":
      state.detailPhim = action.payLoad;
      return { ...state };
    case "GET_DETAIL_SUCCESS":
      state.loading = action.payLoad;
      return { ...state };
    case "GET_MA_RAP":
      state.maRap = action.payLoad;

      return { ...state };
    case "GET_CREDENTIAL":
      state.credential = action.payLoad;
      return { ...state };
    case "GET_RAP":
      state.movieSchedule = action.payLoad;
      return { ...state };
    case "GET_THONG_TIN_RAP":
      state.movieScheduleDate = action.payLoad;
      return { ...state };
    case "GET_LICH_CHIEU":
      state.movieScheduleTime = action.payLoad;
      return { ...state };
    case "GET_LICH_CHIEU_NHANH":
      state.lichChieuPhim = action.payLoad;
      return { ...state };
    case "GET_TICKKET":
      state.movieTicket = action.payLoad;
      return { ...state };
      case "GET_TICKKET_SUCCESS":
      state.loading = action.payLoad;
      return { ...state };
    case "GET_CHAIR":
      let danhSachghe = [...state.movieChair];
      let index = danhSachghe.findIndex(
        (ghe) => ghe.maGhe === action.payLoad.maGhe
      );
      if (index !== -1) {
        danhSachghe.splice(index, 1);
      } else {
        danhSachghe.push(action.payLoad);
      }
      state.movieChair = danhSachghe;
      return { ...state };
    case "GET_CHAIR_RELOAD":
      state.movieChair = action.payLoad;
      return { ...state };
    case "XOA_GHE":
      return { ...state, movieChair: [] };
    case "GET_TOKEN":
      state.token = action.payLoad;
      return { ...state };
    case "GET_INFO":
      state.userInfor = action.payLoad;
      return { ...state };
    case "GET_DANH_SACH_PHIM":
      state.ListPhim = action.payLoad;
      return { ...state };
    case "DELETE_MOVIE":
      const indexDeleteMovie = state.ListPhim.findIndex((item) => {
        return item.maPhim === action.payLoad;
      });
      let cloneMovieList = [...state.ListPhim];
      if (indexDeleteMovie !== -1) {
        cloneMovieList.splice(indexDeleteMovie, 1);
        [...state.ListPhim] = cloneMovieList;
      }
      return { ...state };
    default:
      return state;
  }
};
export default ListPhim;
