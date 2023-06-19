import React, { useState } from 'react';
import Sidebar from './SideBar';

import * as Style from './styles';
const savedMode = localStorage.getItem('darkMode');

function Dashboard({ children }) {
    const [darkMode, setDarkMode] = useState(savedMode === "true");
    const [sidebarClosed, setSidebarClosed] = useState(false);

    const handleToggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
    };

    const handleToggleSidebar = () => {
        setSidebarClosed(!sidebarClosed);
    };

    return (
        <Style.Container>
            <Sidebar
                darkMode={darkMode}
                handleToggleTheme={handleToggleTheme}
                handleToggleSidebar={handleToggleSidebar}
                sidebarClosed={sidebarClosed}
            />
            <Style.Main isDark={darkMode} isClosed={sidebarClosed}>
                {children}
            </Style.Main>
        </Style.Container>
    );
}

export default Dashboard;