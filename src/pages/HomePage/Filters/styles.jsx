import styled, { keyframes } from 'styled-components';
import { Link } from "react-router-dom";

const fadeInLeft = keyframes`
    0% {
        transform: translateX(100px);
        opacity:0;
    }
    100% {
        transform: translateX(0);
        opacity:1;
    }
`;

export const Container = styled.div`
    display:flex;
    height:56px;
    width:100%;
    gap:10px;
    margin:0 auto;
    justify-content:space-between;
    font-family:"Poppins", sans-serif;
`;

export const ExternalContainer = styled.div`
  background-color:#fff;
  width:100%;
  max-width:1100px;
  height:160px;
  position:absolute;
  z-index:998;
  top:-80px;
  left:60px;
  display:flex;
  justify-content:center;
  flex-direction:column;
  border-radius:5px;
  padding:40px 25px;
  animation: ${fadeInLeft} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation-delay:1.5s;

  h2{
    font-size:1rem;
    font-weight:600;
    color:rgb(60, 72, 88);
    padding-bottom:15px;
  }
`;

export const Select = styled.select`
    max-width:170px;
    width:100%;
    height:46px;
    padding:0 15px;
    font-size:15px;
`;

export const InputArea = styled.div`
  height:100%;
  width:100%;
  max-width:400px;
  position:relative;
`;

export const Input = styled.input`
    font-size:15px;
    height:46px;
    width:100%;
    min-width:340px;
    padding:0 15px;
    border:1px solid #cfd4dd;
    border-radius:5px;
    position:relative;

    outline:2px solid #1f9b4c88;
`;

export const SearchButton = styled(Link)`
  height:46px;
  background-color:#1f9b4c;
  font-size:14px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:600;
  color:white;
  border-radius:5px;
  width:100%;
  max-width:140px;
  padding:0 30px;
`;

export const SuggestList = styled.div`
  position:absolute;
  left:0;
  padding:40px 10px 5px;
  top:65px;
  width:100%;
  max-height:300px;
  background-color:white;
  overflow:auto;
  z-index:${({ hide }) => hide ? '-1' : '999'};
  border:1px solid #cfd4dd;
  border-radius:5px;
  transition:all .2s ease-in-out;
  color:#3c4453;
 
  opacity: ${({ hide }) => hide ? '0' : '1'};

  &::-webkit-scrollbar {
    display: none;
    }

  div{
    font-size:16px;
  }

  .divider{
    padding:15px;

    .title{
      margin-bottom:10px;
      font-size:16px;
      font-weight:500;
    }

    .list li{
      cursor:pointer;
      padding:10px;
      display:flex;
      gap:10px;

      &:hover{
          background-color:#1f9b4c88;
      }

      input[type="checkbox"]{
        min-width:20px;
        min-height:20px;
      }

    }
  }

  .not-found{
    padding-bottom:20px;
  }

`;

