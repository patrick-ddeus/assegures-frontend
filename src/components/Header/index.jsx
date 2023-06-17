import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

import { Container, ContainerControl, NavList, NavItem, NavLink, HamburgerIcon } from './styles';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (document.documentElement.scrollTop > 200) {
                setIsTransparent(true);
            } else {
                setIsTransparent(false);
            }
        };

        window.onscroll = () => handleScroll();
    }, []);

    return (
        <Container transparent={isTransparent}>
            <ContainerControl>
                <p>Agro<span>Gouveia</span></p>
                <HamburgerIcon onClick={toggleMenu}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </HamburgerIcon>
                <nav>
                    <NavList isOpen={menuOpen}>
                        <NavItem>
                            <NavLink transparent={isTransparent}>
                                Início
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink transparent={isTransparent}>
                                Sobre
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink transparent={isTransparent}>
                                Alugar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink transparent={isTransparent}>
                                Anuncie seu Imóvel
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink transparent={isTransparent}>
                                Contato
                            </NavLink>
                        </NavItem>
                    </NavList>
                </nav>
            </ContainerControl>
        </Container>
    );
};

export default Header;
