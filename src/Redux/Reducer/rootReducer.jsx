import { combineReducers } from "redux";
import  ListPhim  from "./ListPhim";
const rootReducer=combineReducers({
    phim:ListPhim,
})
export default rootReducer;