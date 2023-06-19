import styled from 'styled-components';
import { SidebarColor, tran } from '../../constants/colors';

export const Container = styled.div`
  width:100%;
  height:100vh;
`;

export const Main = styled.main`
  background-color:${({isDark}) => `${SidebarColor[isDark].bodyColor}`};
  transition: ${tran.tran04};
  width:${({isClosed}) => isClosed ? "calc(100% - 82px)" : "calc(100% - 300px)"};
  position:relative;
  left:${({isClosed}) => isClosed ? "82px" : "300px"};
  height:100vh;
`;

export const MainContainer = styled.div`
  padding-top:40px;
  padding-left:80px;
  padding-right:80px;
  
  h2{
    font-size:24px;
    color:${({ isDark }) => isDark ? "white" : "black"};
  }

  ul{
    margin-top:40px;
  }
`;


export const RegisterSection = styled.section`
  margin-top:30px;
`;

export const RegisterTitle = styled.div`
  display:flex;
  align-items:flex-end;
  gap:40px;

  p{
    margin-top:15px;
    color:${({ isDark }) => isDark ? "white" : "black"};
    font-size:16px;
  }

  .input-area{
    display:flex;
    align-items:center;
    gap:10px;
  }
  
`;

export const SearchInput = styled.input`
  width:100%;
  padding:10px 20px;
  font-size:16px;
  border-radius:5px;
  border:1px solid #c9c9c9;
`;

export const SearchButton = styled.button`
  color:#fff;
  width:300px;
  font-size:16px;
  padding:10px 20px;
  background-color:#1f9b4c;
  border-radius:5px;
  transition: all .2s ease;

  &:hover{
    background-color: #3a3a3a;
    color: white;
  }
`;