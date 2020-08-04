import styled from "styled-components";

export const MapWrap = styled.div`
  height: calc(100vh - 80px);
  position: relative;
  
  @media(max-width: 1000px){
    height: calc(100vh - 60px);
  }
`;

export const MapBlock = styled.div`
    height:100%;
    width:100%;
`;

export const DrawerListWrap = styled.div`
  
`;

export const DrawerListItem = styled.div`
    :hover{
        cursor:pointer;
        color:#1266BB;
        font-weight:bold:
    }
`;