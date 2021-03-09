import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCourse, layDanhSachTheoTen } from '../../../Redux/Actions/course';
class SearchMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: " ",
        }
    }
    handleChange = (name,value) => {
        this.setState({
            form:value
        })
        console.log(value,"cacccccc");
        if(value){
        this.props.dispatch(layDanhSachTheoTen(value))
        }
        else {
            this.props.dispatch(fetchCourse())
        }
    }
    
    render() {
        return (
            <div>
                <form>
                    <input onChange={(event)=>{
                        let {name,value}=event.target;this.handleChange(name,value)}} type="text" placeholder="Nhập từ khóa tên phim" name="search" className="form-control" />
                </form>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        danhSachTheoTen: state.phim.danhSachPhim,
    }

}
export default connect(mapStateToProps)(SearchMovie);