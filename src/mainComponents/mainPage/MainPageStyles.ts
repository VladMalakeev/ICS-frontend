import styled from 'styled-components'
import firstBackground from '../../images/mainFirstBg.png'
import secondBackground from '../../images/mainSecondBg.png'
import thirdBackground from '../../images/mainThirdBg.png'
import sixthBackground from '../../images/mainSixthBg.png'
import emptyNews from '../../images/emptyNews.jpg';
import {NavLink} from "react-router-dom";

const MainBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const FirstBlock = styled(MainBlock)`
  height: 80vh;
  position: relative;
  background: url(${firstBackground});
  background-position: center;
  background-size: cover;
  clip-path: polygon(100% 0, 100% 100%, 50% 95%, 0 100%, 0 0);
`;

export const SecondBlock = styled(MainBlock)`
  background: url(${secondBackground});
  background-size: cover;
  background-position: top;
  flex-direction: column;
  margin-bottom: -20px;
  margin-top: -20px;
`;

export const ThirdBlock = styled(MainBlock)`
  height: 40vh;
  clip-path: polygon(50% 10%, 100% 0, 100% 100%, 0 100%, 0 0);
  background: url(${thirdBackground});
  background-size: cover;
  background-position: center;
  flex-direction: column;
`;

export const FourthBlock = styled(MainBlock)`
  background: #F8F8F8;
  display: flex;
`;

export const FifthBlock = styled(MainBlock)`
  background: white;
`;

export const SixthBlock = styled.div`
  background: url(${sixthBackground});
  height: 60vh;
  padding: 0;
  background-repeat: no-repeat;
  background-size: 70%;
`;

export const SixthBlockMask = styled(MainBlock)`
  width: 100%;
  height: 100%;
  background: linear-gradient(278.39deg,rgba(6,42,119,1) 35.66%,rgba(6,42,119,0.69) 100%);
`;

export const FirstLittleMask = styled.div`
  clip-path: polygon(0 90%, 0 100%, 100% 100%);
  background: rgba(8,35,140,0.5);
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const FirstBigMask = styled.div`
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 90%);
  background: linear-gradient(262.35deg, rgba(8,35,140,0.5) 26.5%, rgba(18,102,187,0.5) 95.77%);
   width: 100%;
  height: 100%;
  position: absolute;
`;

export const SecondLittleMask = styled.div`
  clip-path: polygon(100% 0, 0 0, 100% 22%);
  background: rgba(8,35,140,0.5);
  width: 100%;
  height: 40vh;
  position: absolute;
`;

export const SecondBigMask = styled.div`
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
  background: linear-gradient(262.35deg,rgba(18, 102, 187, 0.33) 26.5%,rgba(8, 35, 140, 0.81) 95.77%);
  width: 100%;
  height: 40vh;
  position: absolute;
`;

const MainParagraph = styled.p`
  font-family: 'Montserrat';
`;

export const ParagraphWhite = styled(MainParagraph)`
  color: white;
  text-align: center;
  width: 550px;
  font-size: 18px;
`;

export const MainContentBlock = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media(max-width: 1890px){
    width: 70%;
  }
  
  @media(max-width: 1550px){
    width: 85%;
  }
`;

export const FirstContentBlock = styled(MainContentBlock)`
    position: absolute;
    height: 100%;
    flex-direction: column;
`;

export const SecondBlockContent = styled(MainContentBlock)`
  flex-direction: column;
`;

export const ThirdBlockContent = styled(MainContentBlock)`
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 30px;
`;

export const FourthBlockContent = styled(MainContentBlock)`
  flex-direction: column;
`;

export const FifthBlockContent = styled(MainContentBlock)`
  display: block;
`;

export const SixthBlockContent = styled(MainContentBlock)`
  flex-direction: column;
  align-items: flex-end;
`;

export const AbilityItemWrap = styled.div`
  display: flex;
  justify-content: flex-start;
   padding: 15px;
`;

export const AbilityItemWrapReverse = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px;
`;

export const AbilityItemContent = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: flex-start;
`;

export const AbilityItemNumber = styled.div`
  width: 15%;
  font-size: 130px;
  color: #282828;
  font-weight: bold;
  font-family: 'Montserrat';
  line-height: 1;
  text-align: end;
`;

export const AbilityItemTextWrap = styled.div`
  width: 85%;
  padding: 10px 20px;
`;

export const ItemHeader = styled.p`
  font-family: 'Montserrat';
  font-weight: bold;
  color: #062A77;
  font-size: 25px;
  padding: 5px 0;
  font-weight: 800;
  margin-bottom: 0;
`;


export const FourthBlockItemWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FourthBlockItem = styled.div`
  background: white;
  width: 30%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CarouselBlock = styled.div`
  height: 500px;
  background: cornflowerblue;
`;

export const NewsWrap = styled.div`
  display: flex;
  align-items: flex-start;
  //justify-content:space-between;
  width: 100%;
  height: 50%;
  padding:20px 20px 10px 20px;
  :last-child{
    padding: 10px 20px 20px 20px;
  }
`;

export const NewsBlockWrap = styled(NavLink)`
  background: #F2F2F2;
  width: 31.3%;
  height: 80%;
  margin: 0 1%;
`;

export const NewsBlock = styled.div<{image:string | null}>`
  background: url(${(props:any) => props.image?props.image:emptyNews});
  background-size: ${(props:any) => props.image?'cover':'contain'};
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const NewsTitle = styled.div`
  background: #062A77;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 85%;
  height: 50px;
  margin-bottom: -20px;
  font-size: 14px;
  padding: 5px;
  text-align: center;
`;