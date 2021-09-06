import styled from 'styled-components'
import firstBackground from '../../images/mainFirstBg.png'
import secondBackground from '../../images/mainSecondBg.png'
import thirdBackground from '../../images/mainThirdBg.png'
import sixthBackground from '../../images/mainSixthBg.png'
import emptyNews from '../../images/emptyNews.jpg';
import {NavLink} from "react-router-dom";
import {H1, H2White} from "../../commonComponents/commomStyles";

const IMAGES = process.env.REACT_APP_IMAGES;

export const MainBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  
  @media(max-width:500px){
    padding: 50px 20px;
  }
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
  
  @media(max-width: 700px){
    height: 50vh;
  }
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
  
  @media(max-width: 1200px){
    background-size: auto;
  }
 
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
  
  @media(max-width: 700px){
    height: 50vh;
  }
`;

export const SecondBigMask = styled.div`
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
  background: linear-gradient(262.35deg,rgba(18, 102, 187, 0.33) 26.5%,rgba(8, 35, 140, 0.81) 95.77%);
  width: 100%;
  height: 40vh;
  position: absolute;
  
  @media(max-width: 700px){
    height: 50vh;
  }
`;

const MainParagraph = styled.p`
  font-family: 'Montserrat';
`;

export const ParagraphWhite = styled(MainParagraph)`
  color: white;
  text-align: center;
  width: 550px;
  font-size: 18px;
  
  @media(max-width: 1180px){
    font-size: 18px;
    width: 600px;
  }
  
   @media(max-width: 781px){
    font-size: 16px;
    width: auto;
  }
`;

export const MainAvailabilityDescription = styled(ParagraphWhite)` 
  @media(max-width: 700px){
      padding: 0 25px;
  }
`;

export const MainManagementDescription = styled(ParagraphWhite)` 
  text-align: right;
  margin-bottom: 40px;
  @media(max-width: 500px){
    text-align: center;
  }
`;

export const MainPageDescription = styled(ParagraphWhite)`
  font-size: 22px;
  width: auto;
  margin: 25px 25px 40px 25px; 
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
  
  @media(max-width: 700px){
    width: 100%;
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
  
  @media(max-width: 700px){
    align-items: center;
  }
`;

export const FourthBlockContent = styled(MainContentBlock)`
  flex-direction: column;
  
   @media(max-width: 1100px){
    width: 100%;
  }
`;

export const FifthBlockContent = styled(MainContentBlock)`
  display: block;
  
  @media(max-width: 1200px){
    width: 100%;
  }
`;

export const SixthBlockContent = styled(MainContentBlock)`
  flex-direction: column;
  align-items: flex-end;
  
   @media(max-width: 500px){
    align-items: center;
  }
`;

export const AbilityItemWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 15px;
   
   @media(max-width: 550px){
    padding: 0;
  }
`;

export const AbilityItemWrapReverse = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px;
  
   @media(max-width: 550px){
    padding: 0;
  }
`;

export const AbilityItemContent = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: flex-start;
  
  @media(max-width: 1200px){
    width: 60%;
  }
  
  @media(max-width: 1000px){
    width: 100%;
  }
`;

export const AbilityItemNumber = styled.div`
  width: 15%;
  font-size: 130px;
  color: #282828;
  font-weight: bold;
  font-family: 'Montserrat';
  line-height: 1;
  text-align: end;
  margin: 20px 10px;
  
  @media(max-width: 700px){
    font-size: 100px;
  }
  
  @media(max-width: 600px){
    font-size: 70px;
    width: 10%;
  }
  
  @media(max-width: 500px){
    font-size: 50px;
    width: 10%;
  }
  
  @media(max-width: 350px){
    width: 5%;
  }
`;

export const AbilityItemTextWrap = styled.div`
  width: 85%;
  padding: 10px 20px;
  
   @media(max-width: 600px){
    width: 90%;
    padding: 10px;
  }
  
  @media(max-width: 350px){
    width: 95%;
  }
`;

export const ItemHeader = styled.p`
  font-family: 'Montserrat';
  font-weight: bold;
  color: #062A77;
  font-size: 25px;
  padding: 5px 0;
  margin-bottom: 0;
  
  @media(max-width: 600px){
    font-size: 20px;
  }
`;


export const FourthBlockItemWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  @media(max-width: 950px){
    flex-direction: column;
    align-items: center;
  }
`;

export const FourthBlockItem = styled.div`
  background: white;
  width: 30%;
  height: 400px;
  
 //test
  display:block;
  overflow:hidden;
  text-transform:capitalize;
  float:left;
  z-index:1;
  border-radius:3px;
  font-size:1.2em;
  position:relative;
  -webkit-transition: 1s ease-out;
  transition: 1s ease-out;
   
  &:before{
    -webkit-transition: 700ms;
    transition: 700ms;
    z-index:-1;
  }
  
  &:hover{
    -webkit-box-shadow:0 5px 20px rgba(0,0,0,.5);
    box-shadow:0 5px 20px rgba(0,0,0,.5);
    cursor:pointer;
    -webkit-transition-delay:1s;
    transition-delay:1s;
    color:#062A77;
    z-index:8;
  }
   
  &:before{
    content:'';
    position:absolute;
    top:-20px;
    left:50%;
    -webkit-transform:translate(-50%, -50%) scale(1);
    transform:translate(-50%, -50%) scale(1);
    display:block;
    width:40px;
    height:40px;
       background: linear-gradient(216.51deg,#08238C 26.5%,#1266BB 95.77%);
    border-radius:50px;
  }
  &:hover{
    &:before{
      -webkit-transform:scale(22);
      transform:scale(22);
    }
  }
  //end
  
  :hover {
    box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.41);
    transition:1s !important;
    cursor: pointer;
    p{
      color: white!important;
    }
    svg{
      path{ 
        transition:1s !important;
        fill: white !important;
      }
    }
  }
  
  @media(max-width: 1200px){
    width: 32%;
  }
  
  @media(max-width: 1200px){
    width: 330px;
    margin: 25px;  
  }
  
   @media(max-width: 400px){
    width: 300px;
    margin: 15px; 
   }
`;

export const CarouselBlock = styled.div`
  height: 500px;
  background: white;
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
  transition:all 300ms;
  :hover{
    box-shadow: 1px 1px 5px black;
    span{
      background:  #062d99;
      transform: translate(0, -5px);
      box-shadow: 0px 1px 3px #535353;
    }
  }
  
  @media(max-width: 1000px){
    width: 50%;
  }
  
  @media(max-width: 700px){
    width: 100%;
  }
`;

export const NewsBlock = styled.div<{image:string | undefined}>`
  background: url(${(props:any) => props.image?IMAGES+props.image:emptyNews});
  background-size: ${(props:any) => props.image?'cover':'contain'};
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const NewsTitle = styled.span`
  background: #062A77;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 85%;
  height: 60px;
  margin-bottom: -20px;
  font-size: 13px;
  padding: 5px;
  text-align: center;
  transition:all 200ms;
`;

export const CarouselWrap = styled.div`
  display: flex;
`;

export const CarouselButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
  font-size: 25px;
    svg{
     transition: all 300ms ease-in-out;
    :hover{
      fill:#062A77;
      transform: scale(1.3);
      cursor: pointer;
      }
    }
`;

export const MainPageTitle = styled(H1)`
  text-align: center;
  margin: 0 25px;
`;

export const IconWrap = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

export const MainManagementTitle = styled(H2White)`
  text-align: right;
  
  @media(max-width: 500px){
    text-align: center;
  }
`;
