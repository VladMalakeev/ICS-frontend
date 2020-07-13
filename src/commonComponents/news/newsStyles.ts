import styled from "styled-components";
import emptyNews from '../../images/emptyNews.jpg';

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
    width: 60vw;
    height: 260px;
    background: white;
    box-shadow: 0px 2px 35px rgba(0, 0, 0, 0.05);
    margin: 15px;
`;

export const SingleNewsImageBackground = styled.div`
  width: 35%;
  margin: 0 10px 20px 10px;
  background: #F2F2F2;
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
`;

export const SingleNewsTextWrap = styled.div`
  width: 65%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SingleNewsHeader = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;
  color: #062A77;
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
`;

export const SingleNewsButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;