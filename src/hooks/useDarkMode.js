import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const savedMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(savedMode === 'true');
  const [sidebarClosed, setSidebarClosed] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

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
  };
};

export default useDarkMode;