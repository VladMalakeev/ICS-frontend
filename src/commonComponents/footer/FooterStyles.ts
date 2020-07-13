import styled from "styled-components";
import seventhBackground from '../../images/mainSeventhBg.png'
import {NavLink} from "react-router-dom";
import {MainContentBlock} from "../../mainComponents/mainPage/MainPageStyles";

export const FooterMapWrap = styled(NavLink)`
  padding: 50px;
  height: 60vh;
  background: url(${seventhBackground});
  background-position: center;
  display: block;
  :hover{
    cursor: pointer;
  }
`;

export const FooterMapContent = styled(MainContentBlock)`
  height: 85%;
  width: 100%;
`;

export const MapInfoBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  a{
    :hover{
      text-decoration: underline;
      color: black;
    }
  }
`;

export const FooterLinksWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #062A77;
  padding: 20px;
  border-bottom: 1px solid white;
`;

export const MediaLinks = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterLink = styled.a`
  color: white;
  margin: 0 40px;
`;

export const FooterCopyrightWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #062A77;
  padding: 10px;
`;