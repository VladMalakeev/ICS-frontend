import styled from 'styled-components';

export const CalendarWrap = styled.div`
    width:40%;
    height: 100%;
    min-height: 200px;
    padding: 20px 20px 20px;
    @media(max-width: 1000px){
      width: 95vw;
      padding: 0;
      height: 320px;
    }
    
     @media(max-width: 800px){
      height: auto;
    }
`;

export const CalendarContent = styled.div`
  box-shadow: 0px 2px 35px rgba(0, 0, 0, 0.05);
   
   @media(max-width: 1000px){
      display: flex;
      height: 100%;
    }
    
    @media(max-width: 800px){
      display: flex;
      flex-direction: column;
      height: auto;
    }
`;


export const DateBlock = styled.div`
  background: #062A77;;
  height: 200px;
  width: 100%;
  display: flex;
  padding: 10px;
  
   @media(max-width: 1000px){
      height: 100%;
      flex-direction: column;
   }
`;

export const CalendarBlock = styled.div`
  background: #7ec1ff;
  min-height: 200px;
  width: 100%;
  
  .ant-picker-cell-inner{
    background: none !important;
  }
  
  .ant-picker-cell-inner::before{
      border: none !important;
  }
  
  .ant-picker-calendar-mode-switch{
    display: none !important;
  }
`;

export const LinksBlock = styled.div`
  background: white;
  min-height: 200px;
  width: 100%;
  
   @media(max-width: 1000px){
      height: 100%;
   }
`;

export const CalendarFirstModuleSelection = styled.div<{today:boolean}>`
  width: 30px;
  height: 30px;
  box-shadow:${(props) => props.today ? '0 0 4px 0px #0013fbab': 'none'}; 
  background: #ffd991;
  border-radius: 50%;
  position: relative;
  bottom: 28px;
  z-index: -1;
`;

export const CalendarSecondModuleSelection = styled.div<{today:boolean}>`
  width: 30px;
  height: 30px;
  box-shadow:${(props) => props.today ? '0 0 4px 0px #0013fbab' : 'none'}; 
  background: #ffab919c;
  border-radius: 50%;
  position: relative;
  bottom: 28px;
  z-index: -1;
`;

export const CalendarSessionModuleSelection = styled.div<{today:boolean}>`
  width: 30px;
  height: 30px;
  box-shadow:${(props) => props.today ? '0 0 4px 0px #0013fbab' : 'none'}; 
  background: #c5aae07a;
  border-radius: 50%;
  position: relative;
  bottom: 28px;
  z-index: -1;
`;

export const CalendarSelected = styled.div<{today:boolean}>`
  width: 30px;
  height: 30px;
  box-shadow:${(props) => props.today ? '0 0 4px 0px #0013fbab': 'none'}; 
  background: #2f7fb2c4;
  border-radius: 50%;
  position: relative;
  bottom: 28px;
  z-index: -1;
`;

export const CalendarToday = styled.div`
  width: 30px;
  height: 30px;
  box-shadow: 0 0 4px 0px #0013fbab;
  border-radius: 50%;
  position: relative;
  bottom: 28px;
  z-index: -1;
`;


export const DayBlock = styled.div`
  width: 50%;
  height: 100%;
  border-right: 1px solid #ffffffa8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  
   @media(max-width: 1000px){
      width: 100%;
      border-bottom: 1px solid #ffffffa8;
      border-right: none;
      padding: 0;
   }
`;

export const WeekBlock = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  
   @media(max-width: 1000px){
      width: 100%;
      padding: 0;
   }
`;

export const CalendarBigWhiteText = styled.p`
    font-size: 50px;
    font-weight: bold;
    color: white;
    margin-bottom: 0;
    text-align: center;
`;

export const CalendarSmallWhiteText = styled.p`
    font-size: 20px;
    color: white;
    margin-bottom: 0px;
    text-align: center;
`;

export const SelectionsBlock = styled.div`
  border-top: 1px solid #0000002e;
  display: flex;
  padding: 10px;
  justify-content:center;
  
   @media(max-width: 1000px){
     border-top:none;
   }
`;

export const SelectWrap = styled.span`
    margin: 5px;
`;

export const ButtonsBlock = styled.div`
  padding: 10px 20px;
`;