import styled from "styled-components";
import { SidebarColor, tran } from "../../constants/colors";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ isDark }) => `${SidebarColor[isDark].bodyColor}`};
`;

export const Main = styled.main`
  transition: ${tran.tran04};
  width: ${({ isClosed }) =>
    isClosed ? "calc(100% - 82px)" : "calc(100% - 300px)"};
  position: relative;
  left: ${({ isClosed }) => (isClosed ? "82px" : "300px")};
`;

export const MainContainer = styled.div`
  padding-top: 40px;
  padding-left: 80px;
  padding-right: 80px;

  h2 {
    font-size: 24px;
    color: ${({ isDark }) => (isDark ? "white" : "black")};
  }

  ul {
    margin-top: 40px;
  }
`;
