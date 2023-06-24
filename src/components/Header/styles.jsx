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

export const Container = styled.header`
    transition:all .4s ease;
    font-family: 'Poppins', sans-serif;
    height:${({ transparent }) => transparent ? `80px` : `70px`};
    color:${({ transparent }) => !transparent ? `white` : `#1b1b1b`};
    background-color:${({ transparent }) => !transparent ? `transparent` : `white`};
    position:fixed;
    width:100%;
    z-index:1000;
    ${({ transparent }) => transparent && `
        box-shadow: 0 1px 30px rgba(0, 0, 0, 0.1);
    `}

    p{
        font-size:32px;

        span{
            transition:all .4s ease;
            color:${({ transparent }) => !transparent ? `white` : `#1f9b4c`};
        }
    }

`;

export const ContainerControl = styled.div`
  display:flex;
  align-items:center;
  gap:8rem;
  width:1210px;
  margin:0 auto;
  height:100%;

  nav{
    border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
    padding:29px 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  margin-top:5px;
  transition:all 0.5s ease-in-out;
  gap:22px;

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
  font-size:14px;

  color: ${({ highlight }) => highlight && `#1f9b4c`};

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

export const NavLink = styled(Link)`
    color:${({ transparent }) => !transparent ? `white` : `#1b1b1b`};

    font-weight:500;
    transition:all 0.4s ease-in-out;

    &:hover{
        color:#1f9b4c;
        transform: scale(1.1)
    }
`;

export const IconsList = styled.div`
  display:flex;
  gap:15px;
  margin-left:40px;

  svg{
    font-size:17px;
    cursor:pointer;
    transition:all .2s ease;

    &:hover{
      color:#E1306C;
    }
  }
`;

