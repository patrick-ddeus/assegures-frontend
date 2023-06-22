import { useState, useEffect } from 'react';
// Esse hook toma conta da página do painel de controle

const useDarkMode = () => {
  const savedMode = localStorage.getItem('darkMode');
  const savedSideBar = JSON.parse(localStorage.getItem('sideBar'));
  const [darkMode, setDarkMode] = useState(savedMode === 'true');
  const [sidebarClosed, setSidebarClosed] = useState(savedSideBar);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('sideBar', sidebarClosed);
  }, [sidebarClosed]);

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleToggleSidebar = () => {
    setSidebarClosed(!sidebarClosed);
  };

  return {
    darkMode,
    sidebarClosed,
    handleToggleTheme,
    handleToggleSidebar,
    setSidebarClosed
  };
};

export default useDarkMode;