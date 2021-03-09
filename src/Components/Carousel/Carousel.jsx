import React, { Component } from 'react';
import DatPhimNhanh from '../DatPhimNhanh/DatPhimNhanh';
import "./Carousel.css";
class Carousel extends Component {
    render() {
        return (
            <div className="carousel-content">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/tho-san-quai-vat-16094165971645.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="images/chi-13-16088073540614.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="images/vo-sinh-dai-chien-16094167631284.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                {/* <div className="datPhimNhanh">
                <DatPhimNhanh/>
                </div> */}
                
            </div>
        );
    }
}

export default Carousel;