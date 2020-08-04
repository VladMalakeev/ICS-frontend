import styled from 'styled-components'
import simpleBackground from '../images/simpleBackground.png'
import {Empty} from "antd";

export const Body = styled.div`
  padding-top: 80px;
  
  @media(max-width: 1000px){
    padding-top: 60px;
  }  
`;

export const SimpleBody = styled.div`
  min-height: 60vh;
  background: url(${simpleBackground});
  background-size: cover;
  background-position: center;
  padding: 30px;
  display: flex;
  justify-content: center;
  
  @media(max-width: 650px){
    padding: 30px 10px;
  }
`;

export const H1 = styled.h1`
  font-family: 'Rubik Mono One';
  color: white;
  font-size: 3em;
  
  @media(max-width: 1180px){
    font-size: 2em;
  }
  
  @media(max-width: 570px){
    font-size: 1.5em;
  }
`;

export const H2 = styled.h2`
  font-family: 'Rubik Mono One';
  font-size: 2em;
  
  @media(max-width: 600px){
     font-size: 1.5em;
     margin-bottom: 20px;
  }
  
  @media(max-width: 450px){
     font-size: 1.2em;
  }
`;

export const H2White = styled(H2)`
  font-family: 'Rubik Mono One';
  color: white;
`;

export const H2Black = styled(H2)`
  font-family: 'Rubik Mono One';
  color: #383838;
  margin-bottom: 40px;
`;

export const Paragraph = styled.p`
  font-family: 'Montserrat';
  color: #383838;
  font-size: 16px;
  margin-bottom: 0;
`;

export const ParagraphCentered = styled(Paragraph)`
  text-align: center;
  padding: 10px;
  font-weight: 600;
`;

export const SimpleButton = styled.span`
  font-family: 'Montserrat';
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 40px;

  
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  text-shadow: none;
  -webkit-transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
          transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  :hover{
   border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
  outline-offset: 15px;
  outline-color: rgba(255, 255, 255, 0);
  text-shadow: 1px 1px 2px #427388;
  }
`;

export const SimpleBlueButton = styled.div`
  font-family: 'Montserrat';
  color: #062A77;
  font-size: 18px;
  padding: 5px 40px;
  font-weight: bold;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  span{
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s all ease;
  }

  
  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background: #062A77;
    transition: 0.4s all ease;
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }

  span {
    &:before,
    &:after {
      position: absolute;
      top: 0;
      content: '';
      height: 100%;
      width: 2px;
      background: #062A77;
      transition: 0.4s all ease;
      z-index: -1;
    }

    &:before {
      left: 0;
    }

    &:after {
      right: 0;
    }
  }

  &:hover {
    &:before,
    &:after {
      transition: 0.4s all ease;
    }

    &:before {
      transform: translateY(-5px);
    }

    &:after {
      transform: translateY(5px);
    }

    span {
      color: white;
      &:before,
      &:after {
        width: 100%;
        transition: 0.4s all ease;
      }
    }
  }
`;

export const SimpleBlueButtonSmall = styled(SimpleBlueButton)`
  padding: 5px 15px;
  font-size: 14px;
`;

export const EmptyWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const EmptyBlock = styled(Empty)`
    width: 300px;
    height: 300px;
  svg{
    width: 300px;
    height: 300px;
  }
`;