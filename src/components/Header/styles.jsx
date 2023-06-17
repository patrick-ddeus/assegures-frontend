import styled from 'styled-components';
import { Link } from "react-router-dom";

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position:absolute;
    right:60px;
  }
`;

export const Container = styled.div`
    font-family: 'Heebo Variable', sans-serif;
    height:80px;
    display:flex;
    gap:120px;
    align-items:center;
    padding:0 60px;
    color:#1b1b1b;
    position:relative;

    p{
        font-size:32px;
    }

`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  transition:all 0.5s ease-in-out;
  gap:15px;

  @media (max-width: 768px) {
    height:${({ isOpen }) => (isOpen ? '200px' : '0px')};
    overflow: hidden;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #f2f2f2;
    padding: ${({ isOpen }) => (isOpen ? '1rem' : '0px')};
  }
`;

export const NavItem = styled.li`
  list-style: none;
  margin-right: 1rem;

  color: ${({ highlight }) => highlight && `#22c55e`};

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

export const NavLink = styled(Link)`
    color:#1b1b1b;
    font-weight:500;
    transition:all 0.4s ease-in-out;

    &:hover{
        color:#22c55e;
        transform: scale(1.1)
    }
`;