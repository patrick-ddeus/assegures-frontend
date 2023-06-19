import styled from 'styled-components';
import { SidebarColor, tran } from '../../constants/colors';

export const Container = styled.div`
  
`;

export const Main = styled.main`
  background-color:${({ isDark }) => `${SidebarColor[isDark].bodyColor}`};
  transition: ${tran.tran04};
  width:${({ isClosed }) => isClosed ? "calc(100% - 82px)" : "calc(100% - 300px)"};
  position:relative;
  left:${({ isClosed }) => isClosed ? "82px" : "300px"};
  height:100vh;
`;
