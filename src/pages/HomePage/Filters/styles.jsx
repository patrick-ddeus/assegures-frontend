import styled, { css, keyframes } from 'styled-components';
import { Link } from "react-router-dom";

const shake = keyframes`
  0%,
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    -webkit-transform: translateX(-10px);
            transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    -webkit-transform: translateX(10px);
            transform: translateX(10px);
  }
  80% {
    -webkit-transform: translateX(8px);
            transform: translateX(8px);
  }
  90% {
    -webkit-transform: translateX(-8px);
            transform: translateX(-8px);
  }
`

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
    display:grid;
    grid-template-columns: 1fr 1fr 2fr 1fr;
    grid-column-gap:10px;
    max-height:56px;
    margin:0 auto;
    font-family:"Poppins", sans-serif;
`;

export const ExternalContainer = styled.div`
  background-color:#fff;
  width:100%;
  max-width:1100px;
  z-index:998;
  margin:-152px auto 0;
  position:relative;
  border-radius:5px;
  padding:25px 25px 40px;
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

export const SearchButton = styled(Link)`
  width:100%;
  height:46px;
  min-height:46px;
  padding:0 30px;
  background-color:#1f9b4c;
  font-size:14px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:600;
  color:white;
  border-radius:5px;
`;

export const SuggestList = styled.div`
  margin-top:10px;
  padding:40px 10px 20px;
  width:100%;
  max-height:300px;
  background-color:white;
  overflow:auto;
  z-index:${({ hide }) => hide ? '-1' : '999'};
  opacity: ${({ hide }) => hide ? '0' : '1'};
  border:1px solid #cfd4dd;
  border-radius:5px;
  transition:all .2s ease-in-out;
  color:#3c4453;
 

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

export const InputGroup = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;

  label{
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: unset;
    color:#3c4858;
  }
`;

export const InputArea = styled.div`
  height:100%;
  position:relative;
`;

export const Input = styled.input`
    font-size:15px;
    height:46px;
    width:100%;
    padding:0 15px;
    border:1px solid #cfd4dd;
    border-radius:5px;
    position:relative;
    outline:2px solid ${({ isInvalid }) => isInvalid ? '#F00' : '#1f9b4c88'};

    ${({ isInvalid }) => isInvalid && css`
        -webkit-animation: ${shake} 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
         animation: ${shake} 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
         outline:2px solid:#F00;
    `}
`;