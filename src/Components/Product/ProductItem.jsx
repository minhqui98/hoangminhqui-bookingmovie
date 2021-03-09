import React, { Component } from 'react';
import "./styles.css";
import { Link } from "react-router-dom";
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

class ProductItem extends Component {
    danhGiaPhim = () => {
        if (this.props.phim.danhGia === 10) {
            return <div className="star text-warning">
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>

            </div>
        }
        if (this.props.phim.danhGia >= 9 && this.props.phim.danhGia < 10) {
            return <div className="star">
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span className="text-warning"><i className="fa fa-star-half-alt"></i></span>

            </div>
        }
        if (this.props.phim.danhGia >= 7 && this.props.phim.danhGia < 9) {
            return <div className="star">
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>

            </div>
        }
        if (this.props.phim.danhGia >= 5 && this.props.phim.danhGia < 7) {
            return <div className="star">
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span className="text-warning"><i className="fa fa-star-half-alt"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>

            </div>
        } else {
            return <div className="star">
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span className="text-warning"><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>

            </div>
        }
    }
    constructor(props) {
        super(props);
        this.state={
            open:false,
            trailer:""
        }
    }
    handleClickOpen = (trailerMovie) => {
        this.setState({
            open:true,
            trailer:trailerMovie,
        })
      };
    handleClose = () => {
        this.setState({
            open:false,
        })
      };
    render() {
        
        return (
            <div>
                <div className="card m-3" style={{ height: 360 }}>
                    <img className="productImage" src={this.props.phim.hinhAnh} style={{ width: "100%", height: 301 }} alt="abc" />
                    <div className="film-info">
                        <div className="film-name">
                            <h6 className="mb-0"><span className="C13">C13</span> {this.props.phim.tenPhim}</h6>
                        </div>
                        <div className="film-button">
                            <Link to={`/detail/${this.props.phim.maPhim}`}> <button className="btn btn-danger buttonDetail">Đặt vé</button></Link>
                        </div>
                    </div>

                    <div className="overlay"></div>
                    <div className="play">
                        <a style={{ color: "white" }}><i onClick={()=>this.handleClickOpen(this.props.phim.trailer)} className="fa fa-play"></i></a>
                    </div>
                    <div className="danhGia">
                        <span className="text-danger font-weight-bold">{this.props.phim.danhGia}</span><br />
                        {this.danhGiaPhim()}
                    </div>
                </div>
                <div>
                    <Dialog
                        open={this.state.open}
                        onClick={()=>this.handleClose()}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                            <iframe title="video" width="560" height="315" src={this.state.trailer} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </div>
            
               </div>
        );
    }

}

export default ProductItem;