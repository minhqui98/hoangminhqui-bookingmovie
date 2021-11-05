import { Box, Grid, Paper, styled, InputLabel, MenuItem, FormControl, Select,Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layLichChieu } from '../../Redux/Actions/course';
// import styled from 'styled-components';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { Boxs, ButtonBuyTicket } from './DatPhimNhanh.styles';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function DatPhimNhanh(props) {
    const dispatch = useDispatch();
    const [movieName, setMovieName] = useState(null);

    const [theaterSystem, setTheaterSystem] = useState(null);
    const [theaterName, setTheaterName] = useState(null);
    const [theaterDate, setTheaterDate] = useState(null);



    const { ListPhim, lichChieuPhim, credential } = useSelector(state => state.phim)
    console.log(movieName);
    // console.log(lichChieuPhim);

    const handleChangeMovieName = (event) => {
        setMovieName(event.target.value)
        // console.log(event.target.value);
        dispatch(layLichChieu(event.target.value))
        setTheaterSystem(null)
        setTheaterDate(null)

    };
    const handleChangeTheaterSystem = (event) => {
        setTheaterSystem(event.target.value)
        setTheaterDate(null)

    };
    const handleChangeTheaterName = (event) => {
        setTheaterDate(null)
        setTheaterName(event.target.value)
    };
    const handleChangeTheaterDate = (event) => {
        setTheaterDate(event.target.value)
    };
    // const handleSubmit = () => {
    //     if(credential){

    //     }
    // };
    return (
        
            <Boxs sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={2}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Tên phim</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={movieName}
                                    label="Tên phim"
                                    onChange={handleChangeMovieName}
                                >
                                    {ListPhim ? ListPhim.map((item, index) => <MenuItem key={index} value={item.maPhim}>{item.tenPhim}</MenuItem>) : <MenuItem>Ko có dữ liệu</MenuItem>}

                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Hệ thống rạp</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={theaterSystem}
                                    label="Hệ thống rạp"
                                    onChange={handleChangeTheaterSystem}
                                >
                                    {lichChieuPhim?.heThongRapChieu && movieName && lichChieuPhim?.heThongRapChieu.map((item, index) => {
                                        return <MenuItem key={index} value={item?.maHeThongRap}>{item?.tenHeThongRap}</MenuItem>
                                    })}

                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Tên rạp</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={theaterName}
                                    label="Tên rạp"
                                    onChange={handleChangeTheaterName}
                                >
                                    {lichChieuPhim?.heThongRapChieu && lichChieuPhim?.heThongRapChieu.filter(item => item.maHeThongRap === theaterSystem)
                                        .map(item1 => item1.cumRapChieu.map((item2) => { return <MenuItem value={item2.maCumRap}>{item2.tenCumRap}</MenuItem> }))}
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Ngày/suất chiếu</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={theaterDate}
                                    label="Tên rạp"
                                    onChange={handleChangeTheaterDate}
                                >
                                    {lichChieuPhim?.heThongRapChieu && lichChieuPhim?.heThongRapChieu.filter(item => item.maHeThongRap === theaterSystem)
                                        .map(item1 => item1.cumRapChieu.filter(item => item.maCumRap === theaterName).map(item => item.lichChieuPhim.map(item =>
                                            <MenuItem value={item.maLichChieu}>Ngày {moment(item.ngayChieuGioChieu).format('DD/MM/YYYY')}------Suất chiếu {moment(item.ngayChieuGioChieu).format('LT')}</MenuItem>)))}
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    {/* <Grid item xs={2}>
                        <Item>xs=8</Item>
                    </Grid> */}
                    <Grid item xs={12} md={2}>
                        {/* <NavLink to={`${credential?`/bookticket/${theaterDate}`:"/signin"}`}>
                            <Button variant="contained" disabled={theaterDate ? false : true}>Mua vé</Button>
                        </NavLink> */}
                        <Button variant="contained" color="primary" disabled={theaterDate ? false : true}>
                            <NavLink style={{color:"white",textDecoration:"none"}} to={`${credential?`/bookticket/${theaterDate}`:"/signin"}`}>Mua vé</NavLink>
                        </Button>
                    </Grid>
                </Grid>
            </Boxs>
    );
}

export default DatPhimNhanh;