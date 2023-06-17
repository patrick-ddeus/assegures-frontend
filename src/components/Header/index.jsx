import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

import { Container, NavList, NavItem, NavLink, HamburgerIcon } from './styles';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Container>
            <p>AgroGouveia</p>
            <HamburgerIcon onClick={toggleMenu}>
                {menuOpen ? <FiX /> : <FiMenu />}
            </HamburgerIcon>
            <nav>
                <NavList isOpen={menuOpen}>
                    <NavItem>
                        <NavLink>
                            Início
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            Sobre
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            Alugar
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            Anuncie seu Imóvel
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            Contato
                        </NavLink>
                    </NavItem>
                </NavList>
            </nav>
        </Container>
    );
};

export default Header;
