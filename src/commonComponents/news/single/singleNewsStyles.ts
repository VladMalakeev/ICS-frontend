import styled from "styled-components";

export const NewsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const NewsBlock = styled.div`
  width: 70%;
  background: white;
  padding: 25px;
`;

export const NewsImage = styled.div<any>`
  background: url(${props => props.image});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 500px;
`;

export const NewsTitle = styled.p`
  font-size: 35px;
  margin-top: 20px;
  font-weight: bold;
  color: rgba(0,0,0,0.65);
  text-align: center;
`;

export const AuthorBlock = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
`;

export const InfoText = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const DescriptionBlock = styled.div`
  text-align: justify;
  font-size: 25px;
`;