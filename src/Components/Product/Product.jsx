import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { connect } from "react-redux";
import Slider from "react-slick";
import { fetchCourse } from '../../Redux/Actions/course';
import "./styles.css"
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';

// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
const settings = {
    // centerMode: true,
    infinite: true,
    // centerPadding: "50px",
    slidesToShow: 4,
    speed: 600,
    rows: 2,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 1,
                arrows: false,
            }
        }
    ]
};


class Product extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         open:false,
    //     }
    // }
    // handleClickOpen = () => {
    //     this.setState({
    //         open:true,
    //     })
    //   };
    // handleClose = () => {
    //     this.setState({
    //         open:false,
    //     })
    //   };
    render() {

        return (
            <div id="product">
                <h1 className="my-5">Lịch chiếu</h1>
                <div className="container">
                    <Slider {...settings}>
                        {this.props.Phim.map((item, index) => {
                            return <div key={index}>
                                <ProductItem phim={item} />
                            </div>
                        })}
                    </Slider>
                </div>
               
            </div>
        );
    }
    
    componentDidMount() {
        this.props.dispatch(fetchCourse())
    }
}

const mapStateToProp = (state) => {
    return {
        Phim: state.phim.ListPhim,
    }
}
export default connect(mapStateToProp)(Product);