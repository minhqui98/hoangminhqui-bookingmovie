import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import {Box }from '@material-ui/core';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #fff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  
  z-index: 10;
  box-shadow: 0px 0px 31px grey;
  position:fixed;
  width:100%;
  top:0;
  
  /* Third Nav */
  /* justify-content: flex-start; */
  
`;
export const Wrapper = styled.div`
  
  
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition:0.3s;
    &:hover{
        text-decoration: none;
        color:red;
        
    }
    
    @media screen and (max-width: 768px) {
        padding:${props => props.flag?"0px":"11px 30px"}
     }
`;


export const Bars = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -6px;
    right: -14px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const Boxs = styled(Box)`
 

`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: ${props => props.flag ? "block" :"none"
  }
`;

export const NavBtnLink = styled(Link)`
  color:white;
  &:hover {
    transition: all 0.2s ease-in-out;
    color:white;
    text-decoration: none;
    @media screen and (max-width: 768px) {
      margin-left:30px;
    }

  }
`;
