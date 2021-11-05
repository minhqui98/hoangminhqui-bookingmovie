// import { ChildCare } from '@material-ui/icons';
import React, { Component,Fragment } from 'react';
// import { courseAction } from '../../Redux/Actions';
// import { connect } from "react-redux";
import Swal from "sweetalert2";

class MovieChair extends Component {
    constructor(props) {
        super(props);
        this.state={
            isBooking:false,
        }
    }
    
    onClickDoiMau = () => {
        if (!this.state.isBooking) {
            this.setState({
                isBooking: true,
            })
        } else {
            this.setState({
                isBooking: false,
            })
        }
    }
    onclickDaDat=()=>{
        Swal.fire({
            text: "Ghế đã có ng đặt !!!",
            title: "Thất bại",
            icon: "error",
            confirmButtonText: "Tiếp tục",
        });
    }
    render() {
        
        // console.log(this.props.chair.daDat,"dadat");
        return (
            <>
                {this.props.chair.daDat===true?(
                <i onClick={()=>this.onclickDaDat()} className="fa fa-couch text-danger m-2"></i>):
                (<i className={!this.state.isBooking ? `fa fa-couch m-2 ${this.props.chair.loaiGhe==="Thuong"?"":"fa fa-couch text-primary"}`:"fa fa-couch text-success m-2"}
                 onClick={()=>{this.onClickDoiMau();this.props.onclickBookChair(this.props.chair)}}></i>)}
            </>
        );
    }
}

export default  MovieChair;