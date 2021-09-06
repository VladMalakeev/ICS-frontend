import styled from "styled-components";
import seventhBackground from '../../images/mainSeventhBg.png'
import {NavLink} from "react-router-dom";
import {MainContentBlock} from "../../modules/main_page/MainPageStyles";
import {H2Black} from "../commomStyles";

export const FooterMapWrap = styled.div`
  padding: 50px;
  height: 60vh;
  background: url(${seventhBackground});
  background-position: center;
  background-size: cover;
  display: block;
  :hover{
    cursor: pointer;
  }
  
   @media(max-width: 400px){
    padding:50px 20px;
   }
`;

export const FooterMapContent = styled(MainContentBlock)`
  height: 85%;
  width: 100%;
  
  @media(max-width: 600px){
    width: 100% !important;
    justify-content: flex-start !important;  
  }
`;

export const MapInfoBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  text-shadow: 0 0 2px white;
  margin: 20px;
  a{
    :hover{
      text-decoration: underline;
      color: black;
    }
  }
`;

export const FooterLinksWrap = styled.div`
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #062A77;
  padding: 20px;
  border-bottom: 1px solid white;
  
  @media(max-width: 500px){
    height: 260px;
  }
`;

export const MediaLinks = styled.div`
  display: flex;
  justify-content: center;
  
  @media(max-width: 500px){
    flex-direction: column;
  }
`;

export const FooterLink = styled.a`
  color: white;
  width: 150px;
  text-align: center;
  :hover{
    color: white;
    text-decoration: underline;
  }
  
  @media(max-width: 500px){
    margin: 5px 0;
  }
`;

export const FooterCopyrightWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #062A77;
  padding: 10px;
`;

export const FooterMapTitle = styled(H2Black)`
  text-align: center;
  width: 100%;
  margin-bottom: 0px;
  height: 15%;
`;