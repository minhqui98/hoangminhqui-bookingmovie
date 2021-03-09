import React, { Component } from 'react';
import AppDownLoad from '../../Components/AppDownLoad/AppDownLoad';
import Carousel from '../../Components/Carousel/Carousel';
// import DatPhimNhanh from '../../Components/DatPhimNhanh/DatPhimNhanh';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import LoadPage from '../../Components/LoadPage/LoadPage';
import MovieSchedule from '../../Components/MovieSchedule/MovieSchedule';
import News from '../../Components/News/News';
import Product from '../../Components/Product/Product';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoading:false,
        }
    }
    loadingPage=()=>{
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.setState({ isLoading: true })), 1000);
         });
    }
    render() {
        return (
            <div>
                <Header/>
                {this.state.isLoading?(<div><Carousel/>
                {/* <DatPhimNhanh/> */}
                <Product/>
                <MovieSchedule/>
                <News/>
                <AppDownLoad/>
                <Footer/></div>):(<LoadPage></LoadPage>)}
                
            </div>
        );
    }
    componentDidMount(){
        this.loadingPage();
    }
}

export default Home;