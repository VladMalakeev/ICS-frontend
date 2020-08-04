import styled from "styled-components";
import emptyNews from '../../images/emptyNews.jpg';

export const NewsBlockWrap = styled.div`
  min-height: 60vh;
  width: 60vw;
  
  @media(max-width: 1330px){
      width: 80vw;
    }
    
    @media(max-width: 1000px){
      width: 95vw;
    }
`;

export const NewsDoubleBlockWrap = styled.div`
  min-height: 60vh;
  display: flex;
  width: 70vw;
  
   @media(max-width: 1400px){
      width: 85vw;
    }
    
    @media(max-width: 1200px){
      width: 95vw;
    }
    
    @media(max-width: 1000px){
      flex-direction: column-reverse; 
    }
    
`;

export const NewsListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SingleNewsWrap = styled.div`
    display: flex;
    padding: 20px;
    width: 100%;
    height: 260px;
    background: white;
    box-shadow: 0px 2px 35px rgba(0, 0, 0, 0.05);
    margin: 15px;
    
    @media(max-width: 800px){
       height: 220px;
    }
    
    @media(max-width: 650px){
       flex-direction: column;
       height: 450px;
    }
    
    @media(max-width: 450px){
      height: 500px;
    }
`;

export const SingleNewsImageBackground = styled.div`
  width: 35%;
  margin: 0 10px 20px 10px;
  background: #F2F2F2;
  
  @media(max-width: 650px){
      width: 100%;
      height: 200px;
      margin: 0;
  }
`;

export const SingleNewsImageWrap = styled.div<{image:string | null}>`
  background: url(${(props:any) => props.image?props.image:emptyNews});
  background-size: ${(props:any) => props.image?'cover':'contain'};
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const SingleNewsDate = styled.div`
  background: #062A77;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 85%;
  height: 50px;
  font-size: 20px;
  margin-bottom: -20px;
  
  @media(max-width: 650px){
    height: 40px;
    width: 70%;
  }
`;

export const SingleNewsTextWrap = styled.div`
  width: 65%;
  padding: 0 10px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media(max-width: 650px){
      width: 100%;
      margin-top: 30px;
      height: 100%;
      padding: 0;
  }
`;

export const SingleNewsHeader = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;
  color: #062A77;
  
  @media(max-width: 800px){
    font-size: 16px;
  }
`;

export const SingleNewsDescription = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  text-align: justify;
  overflow: hidden;
  height: 110px;
  
   @media(max-width: 800px){
    height: 70px;
  }
  
   @media(max-width: 650px){
    height: 90px;
  }
`;

export const SingleNewsButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media(max-width: 650px){
    margin-top: 10px;
  }
  
  @media(max-width: 450px){
    flex-direction: column;
    p{
      width: 100%;
      text-align: left;
      padding-bottom: 10px;
    }
    
    a{
      width: 100%;
    }
  }
`;