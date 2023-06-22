import React from 'react';
import {
    IoNotificationsOutline,
    IoExitOutline,
    IoHomeOutline,
    IoMenuSharp,
    IoPersonAddOutline,
    IoPencil,
    IoSunnyOutline,
    IoMoonOutline
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

import * as Style from "./styles";

const Sidebar = ({ sidebarClosed, darkMode, handleToggleSidebar, handleToggleTheme }) => {
    return (
        <Style.Sidebar isClosed={sidebarClosed} isDark={darkMode}>
            <Style.SidebarTitleArea isDark={darkMode}>
                <p className="logo text">Agro<span>Gouveia</span></p>
                <IoMenuSharp onClick={handleToggleSidebar} />
            </Style.SidebarTitleArea>
            <Style.MenuArea>
                <Style.Menu isDark={darkMode}>
                    <article>
                        <Style.MenuItem isDark={darkMode}>
                            <Link to="/admin/painel-de-controle">
                                <IoHomeOutline className='icon' />
                                <Style.MenuItemText className="text">
                                    Painel de Controle
                                </Style.MenuItemText>
                            </Link>
                        </Style.MenuItem>
                        <Style.MenuItem isDark={darkMode}>
                            <Link>
                                <IoPersonAddOutline className='icon' />
                                <Style.MenuItemText className="text">
                                    Cadastro de Contatos
                                </Style.MenuItemText>
                            </Link>
                        </Style.MenuItem>
                        <Style.MenuItem isDark={darkMode}>
                            <Link>
                                <IoPencil className='icon' />
                                <Style.MenuItemText className="text">
                                    Atualizar Destaques
                                </Style.MenuItemText>
                            </Link>
                        </Style.MenuItem>
                    </article>
                    <article>
                        <Style.MenuItem isDark={darkMode}>
                            <Link>
                                <IoNotificationsOutline className='icon' />
                                <Style.MenuItemText className="text">
                                    Notificações
                                </Style.MenuItemText>
                            </Link>
                        </Style.MenuItem>
                        <Style.MenuItem isDark={darkMode}>
                            <Link to="/">
                                <IoExitOutline className='icon' />
                                <Style.MenuItemText className="text">
                                    Sair
                                </Style.MenuItemText>
                            </Link>
                        </Style.MenuItem>

                        <Style.SunMoonArea isDark={darkMode}>
                            <Style.SunMoon isDark={darkMode}>
                                <IoSunnyOutline className='sun icon' />
                                <IoMoonOutline className='moon icon' />
                            </Style.SunMoon>
                            <span className="text">
                                {darkMode ? "Dark Mode" : "Light Mode"}
                            </span>
                            <Style.ToggleArea isClosed={sidebarClosed} isDark={darkMode} onClick={handleToggleTheme}>
                                <Style.ToggleButton isClosed={sidebarClosed}/>
                            </Style.ToggleArea>
                        </Style.SunMoonArea>
                    </article>
                </Style.Menu>
            </Style.MenuArea>
            <Style.Footer isDark={darkMode}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg" alt="" />
                <div className='text'>
                    <span>Username</span>
                    <span>email@email.com</span>
                </div>
            </Style.Footer>
        </Style.Sidebar >
    );
};

export default Sidebar;