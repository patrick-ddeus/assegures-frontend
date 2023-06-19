import styled from 'styled-components';
import { SidebarColor, tran } from '../../constants/colors';

export const Container = styled.div`
  width:100%;
  height:100vh;
`;

export const Main = styled.main`
  background-color:${({isDark}) => `${SidebarColor[isDark].bodyColor}`};
  transition: ${tran.tran04};
  color:white;
  width:${({isClosed}) => isClosed ? "calc(100% - 82px)" : "calc(100% - 300px)"};
  position:relative;
  left:${({isClosed}) => isClosed ? "82px" : "300px"};
  height:100vh;
`;
