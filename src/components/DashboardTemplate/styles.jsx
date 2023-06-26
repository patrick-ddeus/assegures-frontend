import styled from "styled-components";
import { SidebarColor, tran } from "../../constants/colors";

export const Container = styled.div`
  width:100%;
  height:100%;
`;

export const Main = styled.main`
  background-color:${({ isDark }) => `${SidebarColor[isDark].bodyColor}`};
  transition: ${tran.tran04};
  width:${({ isClosed }) => isClosed ? "calc(100% - 82px)" : "calc(100% - 300px)"};
  position:relative;
  left:${({ isClosed }) => isClosed ? "82px" : "300px"};
  min-height:110vh;
`;

export const MainContainer = styled.div`
  padding-top:40px;
  padding-left:80px;
  padding-right:80px;
  height:100%;

  h1,h2,h3,h4,h5,h6,p{
    color:${({ isDark }) => isDark ? "white" : "#242527"};
  }

  h2{
    font-size:24px;
  }

`;
