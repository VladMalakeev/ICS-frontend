import styled from "styled-components";
import {ListElementWrap} from "../../commonComponents/listPage/listPageStyles";

export const DepartmentsListElementWrap = styled(ListElementWrap)`
    display: flex;
    padding: 20px;
    width: 60vw;
    height: 280px;
    background: white;
    box-shadow: 0px 2px 35px rgba(0, 0, 0, 0.05);
    margin: 15px;
    
    @media(max-width: 1330px){
      width: 80vw;
    }
    
    @media(max-width: 1000px){
      width: 95vw;
    }
    
    @media(max-width: 800px){
       height: 220px;
    }
    
    @media(max-width: 650px){
       flex-direction: column;
       height: 470px;
    }
    
    @media(max-width: 450px){
      height: 500px;
    }
`;