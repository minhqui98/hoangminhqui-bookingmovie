import { Grid,Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { phimService } from "../../Service/index,";
import {Image,Wrapper,Content} from "./ProductResponsive.styles";
import image from "../../asset/img/bookticket.jpg"
import { Spin } from 'antd';
import { Link } from 'react-router-dom';
const initialState = {
    currentPage: 0,
    items: [],
    totalPages: 0,
    totalCount: 0
}
function ProductResponsive(props) {
    const [data, setData] = useState(initialState);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [loadMore, setLoadmore] = useState(false)
    const fetchMovie = async (page, limit) => {
        try {
            setError(false)
            setLoading(true)
            const movie = await phimService.LoadDanhSachPhimResponsive(page, limit);
            setData(prev => ({
                ...movie.data,
                items: page > 1 ? [...prev.items, ...movie.data.items] : [...movie.data.items]
            }))

        } catch (err) {
            console.log(err);
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchMovie(1, 5);
    }, [])
    function handleLoadmore() {
        setLoadmore(true)
    }
    useEffect(() => {
        if (!loadMore) return
        fetchMovie(data.currentPage + 1, 5)
        setLoadmore(false)
    }, [data.currentPage, loadMore])
    return (
        <Content>
            <Grid>
                <Grid item xs={12}>
                    {data.items.map((item)=>{
                        return <Link to={`/detail/${item.maPhim}`}><Image src={item.hinhAnh}/></Link>
                    })}
                </Grid>
            </Grid>
            <Spin spinning={loading}/>
            <Wrapper onClick={handleLoadmore}>Xem thêm</Wrapper>
        </Content>
    );
}

export default ProductResponsive;