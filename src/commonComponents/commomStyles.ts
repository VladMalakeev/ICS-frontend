import styled from 'styled-components'

export const Body = styled.div`
  padding-top: 80px;
  
  @media(max-width: 1000px){
    padding-top: 60px;
  }  
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