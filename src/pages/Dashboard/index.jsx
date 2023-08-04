import React from "react";

import useDarkMode from "../../hooks/useDarkMode";

import { Outlet } from "react-router-dom";

import Sidebar from "../../components/SideBar";
import * as Style from "./styles";

function Dashboard() {
  const { darkMode, sidebarClosed, handleToggleTheme, handleToggleSidebar } =
    useDarkMode();

  return (
    <Style.Container isDark={darkMode}>
      <Sidebar
        darkMode={darkMode}
        handleToggleTheme={handleToggleTheme}
        handleToggleSidebar={handleToggleSidebar}
        sidebarClosed={sidebarClosed}
      />
      <Style.Main isDark={darkMode} isClosed={sidebarClosed}>
        <Style.MainContainer isDark={darkMode}>
          <Outlet />
        </Style.MainContainer>
      </Style.Main>
    </Style.Container>
  );
}

export default Dashboard;
