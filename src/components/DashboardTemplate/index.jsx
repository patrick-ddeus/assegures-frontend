import React, { useEffect } from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import Sidebar from '../../components/SideBar';
import * as Style from './styles';

function DashboardTemplate({ children }) {
    const { darkMode, sidebarClosed, handleToggleTheme, handleToggleSidebar, setSidebarClosed} = useDarkMode();
    
    useEffect(() => {
        setSidebarClosed(true)
    }, [])

    return (
        <Style.Container>
            <Sidebar
                darkMode={darkMode}
                handleToggleTheme={handleToggleTheme}
                handleToggleSidebar={handleToggleSidebar}
                sidebarClosed={sidebarClosed}
            />
            <Style.Main isDark={darkMode} isClosed={sidebarClosed}>
                <Style.MainContainer isDark={darkMode}>
                    {children}
                </Style.MainContainer>
            </Style.Main>
        </Style.Container>
    );
}

export default DashboardTemplate;