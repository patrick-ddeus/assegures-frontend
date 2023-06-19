import styled from 'styled-components';
import { SidebarColor, tran } from '../../constants/colors';

export const Sidebar = styled.nav`
  font-family:"Poppins", sans-serif;
  width:${({ isClosed }) => isClosed ? '84px' : "300px"};
  height:100vh;
  background-color:${({ isDark }) => `${SidebarColor[isDark].sidebarColor}`};
  position:fixed;
  top:0;
  left:0;
  padding:10px 14px;
  transition:${tran.tran04};

  .icon{
    font-size:20px;
    margin-right:5px;
    min-width:60px;
    color:${({ isDark }) => `${SidebarColor[isDark].textColor}`};
    transition:${tran.tran04};
  }

  .text{
    color:${({ isDark }) => `${SidebarColor[isDark].textColor}`};
    white-space: nowrap;
    opacity:${({ isClosed }) => isClosed ? '0' : "1"};
    transition:${tran.tran03};
    overflow:hidden;
  }
`;

export const SidebarTitleArea = styled.div`
   color:${({ isDark }) => `${SidebarColor[isDark].textColor}`};
   display:flex;
   align-items:center;
   margin-top:20px;
   justify-content:space-between;
   min-width:32px;

   svg{
    font-size:26px;
    cursor:pointer;
    position:absolute;
    right:27px;
   }
   
  .logo{
    font-size:26px;
    font-weight:500;

    span{
        transition:all .4s ease;
        color:#1f9b4c;
    }
  }
`;

export const MenuArea = styled.section`
  height:calc(100% - 50px);
`;

export const Menu = styled.ul`
  li:first-child {
    margin-top:15px;
    position:relative;
  }

  article:first-child{
    margin-top:20px;
    padding-bottom:25px;
    border-bottom:2px solid ${({ isDark }) => `${SidebarColor[isDark].primaryColor}`};
  }

  article:last-child{
    margin-top:25px;
  }
`;

export const MenuItem = styled.li`
  display:flex;
  height:50px;
  margin-top:10px;
  width:${({ isClose }) => isClose ? `63px` : "100%"};
  transition:${tran.tran04};

  a{
    display:flex;
    align-items: center;
    width:100%;
    transition:${tran.tran04};
    border-radius:6px;
    color:${({ isDark }) => `${SidebarColor[isDark].textColor}`};

    &:hover{
        background-color:${({ isDark }) => `${SidebarColor[isDark].primaryColor}`};
        color:${({ isDark }) => `${SidebarColor[isDark].sidebarColor}`};
        
        .icon{
            color:${({ isDark }) => `${SidebarColor[isDark].hoverColor}`};
        }

        .text{
            color:${({ isDark }) => `${SidebarColor[isDark].hoverColor}`};
        }
    }
  }
`;

export const MenuItemText = styled.span`
  font-size:16px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 1;
  transition: ${tran.tran03};
`;

export const Footer = styled.footer`
  background-color:${({ isDark }) => `${SidebarColor[isDark].primaryColorLight}`};
  position:absolute;
  bottom:0;
  left:0;
  height:70px;
  width:100%;
  min-width:70px;
  display:flex;
  align-items:center;
  padding:15px 20px;
  gap:20px;
  transition: ${tran.tran04};

  img{
    min-width:40px;
    width:40px;
    height:40px;
  }

  div{
    display:flex;
    flex-direction: column;
    font-size:16px;
    
    span:nth-child(1){
        font-weight:500;
    }

    span:nth-child(2){
        color:#75889f;
        font-size:14px;
    }
  }
`;

export const SunMoonArea = styled.li`
  display:flex;
  align-items: center;
  background-color: ${({ isDark }) => `${SidebarColor[isDark].primaryColorLight}`};;
  transition: ${tran.tran04};
  border-radius:6px;
  height:50px;
  margin-top:10px;
  width:100%;

  .text{
    font-size:16px;
    font-weight:500;
  }
`;

export const SunMoon = styled.div`
  display:flex;
  align-items: center;

  .sun{
    position:absolute;
    opacity:${({ isDark }) => isDark ? '1' : '0'};
  }

  .moon{
    opacity:${({ isDark }) => isDark ? '0' : '1'};
  }
  
`;

export const ToggleArea = styled.div`
  background-color: ${({ isDark }) => `${SidebarColor[isDark].toggleColor}`};
  width: 44px;
  height: 22px;
  position: relative;
  border-radius: 30px;
  margin-left:30px;
  opacity:1;
  cursor:pointer;
  opacity:${({ isClosed }) => isClosed ? '0' : "1"};
  transition: ${tran.tran02};

  &::before{
    content: "";
    width: 15px;
    height: 15px;
    background-color: ${({isDark}) => isDark ? `${SidebarColor[false].textColor}` : `${SidebarColor[false].sidebarColor}`};
    position: absolute;
    top: 50%;
    left: ${({isDark}) => isDark ? `25px` : `5px`};
    transform: translateY(-50%);
    border-radius: 50%;
    transition: ${tran.tran03}
  }
`;

export const ToggleButton = styled.div`
  width: 100%;
  background-color: ${SidebarColor[false].hoverColor};
  margin: 5px;
  opacity:${({ isClosed }) => isClosed ? '0' : "1"};
`;