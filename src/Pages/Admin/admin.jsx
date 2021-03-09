import React, { Component } from 'react';

import Swal from "sweetalert2";

import {NavLink} from "react-router-dom";
import Usermovie from '../../Components/UserMovie/Usermovie';

class admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
           isLoading: false,
        };
     }
     handleLazy() {
        return new Promise((resolve) => {
           setTimeout(() => resolve(this.setState({ isLoading: true })), 1000);
        });
     }
     chuyenTrangAdmin=()=>{
        Swal.fire({
            title: "Bạn không phải là quản trị!",
            text: "Vui lòng đăng nhập bằng tài khoản quản trị",
            icon: "error", //error, success,warning,question
            confirmButtonText: "Đăng nhập",
         });
         localStorage.removeItem("cxvnbxcmn");
      this.props.history.replace("/signin");
     }
    render() {
        const token = JSON.parse(localStorage.getItem("cxvnbxcmn"));
        return (
            <div>
                <div className="menu">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href=" ">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <NavLink to="/"><a href=" " className="nav-link">Về lại trang chủ <span className="sr-only">(current)</span></a></NavLink>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li> */}
                                
                            </ul>
                        </div>
                    </nav>

                </div>
                
                {token &&token.maLoaiNguoiDung==="QuanTri"?<Usermovie></Usermovie>:this.chuyenTrangAdmin()}
            </div>
        );
    }
}

export default admin;