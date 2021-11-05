import styled from 'styled-components';
import {Box, Button }from '@material-ui/core';
export const Wrapper = styled.div`
  
  
`;
export const Boxs = styled(Box)`
  border-radius:7px;
  padding:16px;
  box-shadow: 0px 6px 15px 0 grey;
  position: absolute;
  width: 60%;
  bottom: -48px;
  z-index: 2;
  background-color: white;
  right: 0;
  left: 20%;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: auto;
    margin-top: 27px;
    position: unset;
    margin-bottom:40px;
 }
`;