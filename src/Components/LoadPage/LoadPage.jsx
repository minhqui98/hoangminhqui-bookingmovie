import React, { Component } from 'react';
import "./LoadPage.css";
class LoadPage extends Component {
    render() {
        return (
            <div className="lazyLoadOverlay">
            <img
               src="https://s3img.vcdn.vn/123phim/2018/09/b79ac4d8839d06c71c684398274620bd.png"
               alt=""
            />
         </div>
        );
    }
}

export default LoadPage;