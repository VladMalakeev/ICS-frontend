import styled from "styled-components";
import {sizes} from "../../utils/sizes";

export const LecturersDataWrap = styled.div`
  width: 1300px;
  height: 100%;
  padding: 15px;
  
  @media(${sizes["1366"]}){
    padding: 0px;
  }
  
  @media(${sizes["1024"]}){
   width: 650px;
  }
`;

export const LecturersListWrap = styled(LecturersDataWrap)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  
  @media(${sizes["1366"]}){
    padding: 0px;
    grid-gap: 25px;
  }
  
  @media(${sizes["1024"]}){
   grid-template-columns: 1fr;
   width: 650px;
  }
`;

export const LecturerWrap = styled.div`
  width:100%;
  height: auto;
  background: rgba(241,241,241,0.5);
  padding: 15px;
  border-radius: 5px;
  box-shadow: 1px 1px 3px #6d6d6d;
  
  
`;

export const LecturerListItemWrap = styled(LecturerWrap)`
  display: flex;

  &:hover{
     box-shadow: 1px 1px 3px #7193ee;
  }
`;

export const LecturerContentWrap = styled.div`
  display: flex;
  flex-grow: 1;
  height: auto;
  margin-bottom: 15px;
`;

export const LecturerImage = styled.img`
  border-radius: 3px;
  box-shadow: 1px 1px 2px #919191;
`;

export const LecturerListItemImage = styled(LecturerImage)`
  width: 200px;
  height: 250px;
  
  @media(${sizes["1200"]}){
    width: 150px;
    height: 200px;
  }
`;

export const LecturerSinglePageImage = styled(LecturerImage)`
  width: 300px;
  height: 350px;
`;

export const LecturerItemContent = styled.div`
  width: calc(100% - 215px);
  height: auto;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  
   @media(${sizes["1200"]}){
      width: calc(100% - 165px);
   }
`;

export const LecturerItemTextContainer = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 5px 10px;
  font-size: 18px;
  border-radius: 3px;
  box-shadow: 1px 1px 2px #919191;
`;

export const LecturerItemTitle = styled(LecturerItemTextContainer)`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const LecturerItemInfo = styled(LecturerItemTextContainer)`
  height: auto;
  flex-grow: 1;
`;

export const LecturerInfoParagraph = styled.p`
  border-bottom: 2px solid #dedede;
  margin: 15px 0;
`;