import styled from "styled-components";
import emptyNews from "../../images/emptyNews.jpg";
import {sizes} from "../../utils/sizes";

export const SinglePageWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SinglePageBlock = styled.div`
    width: 90%;
    background: #ffffffad;
    padding: 25px;
    box-shadow: 0 0 5px #00000024;
    
    @media(max-width: 650px){
      width: 95%;
      padding: 15px;
    }
`;

export const SinglePostImageWrap = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 3px 3px 11px 0px #0000003b;
  background: #F2F2F2;
  
  @media(max-width: 1500px){
    //height: 500px;
  }
  
   @media(max-width: 1000px){
   // height: 400px;
  }
  
  @media(max-width: 650px){
   // height: 250px;
  }
  
  @media(max-width: 400px){
   // height: 200px;
  }
`;

export const SinglePostImage = styled.div<{src:string}>`
  width: 100%;
  height: 400px;
  background: url(${props => props.src ?? emptyNews});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${props => props.src ? 'cover' : 'contain'};
  
  @media(${sizes[768]}){
    height: 300px;
  }
  
  @media(${sizes[650]}){
    height: 250px;
  }
  
  @media(${sizes[480]}){
    height: 200px;
  }
`;

export const SinglePostTitle = styled.p`
  font-family: 'Montserrat';
  font-size: 35px;
  margin-top: 1em;
  font-weight: bold;
  color: rgba(0,0,0,0.65);
  text-align: center;
  
  @media(max-width: 1500px){
     font-size: 28px;
  }
  
  @media(max-width: 1000px){
     font-size: 24px;
  }
  
  @media(max-width: 800px){
       font-size: 20px;
  }
  
  @media(max-width: 400px){
       font-size: 18px;
  }
`;

export const SinglePostDescriptionBlock = styled.div`
  text-align: justify;
  font-size: 25px;
  padding: 0 15px;
  
  @media(max-width: 1500px){
     font-size: 22px;
  }
  
  @media(max-width: 1000px){
     font-size: 18px;
  }
  
  @media(max-width: 800px){
       font-size: 16px;
       padding: 0;
  }
  
`;

export const SinglePostAuthorBlock = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  
  @media(max-width: 600px){
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
`;

export const SinglePostInfoText = styled.span`
  font-size: 20px;
  font-weight: bold;
  
  @media(max-width: 1000px){
     font-size: 18px;
  }
  
  @media(max-width: 800px){
       font-size: 16px;
  }
`;
