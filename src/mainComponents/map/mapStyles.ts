import styled from "styled-components";
import { HashLink} from 'react-router-hash-link';

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

export const DrawerListWrap = styled.div<any>`
  padding-top:${props => props.showClosedBtn? '35px' : '0px'};
`;

export const DrawerListItem = styled(HashLink)<any>`
    display:flex;
    justify-content:${props => !props.isOpen? 'center':'flex-start'};
    align-items:center;
    font-size:16px;
    color: ${props => props.active ?'#1890ff':'#454545'};
    margin-top:12px;

    :hover{
        transition:200ms;
        cursor:pointer;
        color:#1890ff;

        svg{
          fill:#1890ff;
          font-size:25px;
          transition:200ms;
        }
    }

    span{
      margin-left:5px;
    }

    svg{
      font-size:25px;
      fill:${props => props.active ?'#1890ff':'#454545'};
    }
`;

export const DriverCloseButton = styled.div<any>`
  position:fixed;
  padding:7px 0 7px 0;
  background:white;
  display:flex;
  justify-content:${props => props.isOpen? 'flex-start':'center'};
  width:${props => props.isOpen? '270px':'30px'};
  border-bottom:1px solid #f3f3f3;
`;