import styled from 'styled-components'
import {NavLink} from "react-router-dom";

export const HeaderWrap = styled.div`
  width: 100%;
  height: 80px;
  background: linear-gradient(216.51deg, #08238C 26.5%, #1266BB 95.77%);
  display: flex;
  position: fixed;
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 1000px){
     height: 60px;
  }
`;

const HeaderLinks = styled.div`
  width: calc(50% - 60px);
  display: flex;
  
  @media(max-width: 1000px){
     display: none;
  }
`;

export const HeaderLeftLinks = styled(HeaderLinks)`
  justify-content: flex-end;
`;

export const HeaderRightLinks = styled(HeaderLinks)`
  justify-content: flex-start;
`;

export const DriverLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DriverSeparator = styled.div`
  height: 1px;
  width: 100%;
  background: rgba(255,255,255,0.5);
  margin: 20px 0;
`;

export const HeaderLink = styled.span`
  color: white;
  margin: 0 30px;
  font-size: 18px;
  a{
    color: white;
    display: flex;
    text-decoration: none;
    position: relative;
    transition: all 0.6s;
    &:before {
        content: "";
        width: 0;
        height: 0.1em;
        position: absolute;
        bottom: 0;
        left: 50%;
        background: white;
        transition: all 0.3s;
    }
    &:hover {
        &:before {
            width: 100%;
            left: 0;
            background: white;
        }
    }
  }
  a:visited{
    color: white;
  }
  :hover{
    cursor: pointer;
  }
  
  @media(max-width: 1400px){
    font-size: 16px;
  }
  
  @media(max-width: 1200px){
    margin: 0 20px;
    font-size: 14px;
  }
  
  @media(max-width: 1000px){
    font-size: 16px;
     margin: 0px 0px;
    a{
      display: inline-block;
      margin: 10px 0px;
      }
    }
`;

export const LogoLink = styled(NavLink)`
  display: flex;
`;

export const Logo = styled.img`
  height: 60px;
  width: 60px;
  margin: 0 40px;
  
  @media(max-width: 1200px){
    margin: 0 20px;
  }
  
  @media(max-width: 1000px){
     height: 40px;
     width: 40px;
     margin: 0 5px;
  }
`;

export const HamburgerWrap = styled.span`
  z-index: 1001;
  display: none;
  @media(max-width: 1000px){
    display: block;
  }
`;