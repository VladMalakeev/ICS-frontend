import styled from "styled-components";
import {Link} from "react-router-dom";
import {sizes} from "./../../utils/sizes";

export const DepartmentsListWrap = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-gap:45px;
    padding:15px;
    font-family: Scada;
    font-weight: 600;
    font-size: 24px;
    color: #343333;
    
    @media(${sizes["1366"]}){
      grid-gap:30px;
      padding:0px;
      font-size: 22px;
    }
    
     @media(${sizes["1200"]}){
      font-size: 18px;
     }
     
     @media(${sizes["1024"]}){
      grid-template-columns:1fr 1fr;
     }
     
     @media(${sizes["650"]}){
      grid-template-columns:1fr;
      padding:0 45px;
     }
     
      @media(${sizes["480"]}){
        padding:10px;
      }
`;

export const DepartmentListItem = styled(Link)`
    width: 100%;
    height: 350px;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #6d6d6d;
    position: relative;
    overflow: hidden;
   
    &:hover{
      cursor: pointer;
    
      div{
       transform: scale(1.1);
       transition: all .7s;
      }
      
      span{
        background: rgba(5,127,248,0.8);
        color: white;
        transition: all .4s;
      }
    }
    
     @media(${sizes["1200"]}){
      height: 280px;
     }
`;

export const DepartmentListItemBackground = styled.div<{src:string}>`
    width: 100%;
    height: 100%;
    background-image: url("${props => props.src}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: all .7s;
`;

export const DepartmentListItemText = styled.span`
  width: 100%;
  height: 30%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;;
  transition: all .4s;
`;

