import styled, { keyframes } from 'styled-components';
import banner from "../../assets/img/banner.jpg";
import { Link } from "react-router-dom";

const kenburnsTop = keyframes`
  0% {
    transform: scale(1) translateY(0);
    transform-origin: 50% 16%;
  }
  100% {
    transform: scale(1.1) translateY(-15px);
    transform-origin: top;
  }
`;

export const Container = styled.div`
  overflow:hidden;

  .teste{
    height:400px;
  }
`;


export const Banner = styled.div`
  height:100vh;
  min-height:500px;
  background:url(${banner});
  background-size:cover;
  background-position:0 80%;
  animation: ${kenburnsTop} 3s ease-out both;
  position:relative;
  display:flex;
  align-items:center;

  &::before{
    content: "";
    position: absolute;
    top: 0;
    height: 100vh;
    min-height:500px;
    left: 0;
    right: 0;
    z-index: -1;
    background-color: #0c0c0c;
    opacity: .72;
  }

`;

export const BannerContent = styled.div`
  color:white;
  font-family: 'Poppins', sans-serif;
  display:flex;
  align-items:center;
  justify-content:space-between;
  max-width:1100px;
  width:100%;
  margin:0 auto;
  gap:60px;
`;

export const BannerText = styled.div`
  h2{
    font-weight:300;
    font-size:3em;
    letter-spacing:-1px;
    margin-top:-70px;
    margin-bottom:40px;
    line-height:1.5;
  }
`;

export const BannerVideo = styled.div`
  iframe{
    width:525px;
    height:295px;
  }
`;

export const BannerButtom = styled(Link)`
  border: 2px solid #f9f9f9;
  color: #f9f9f9;
  border-radius: 100px;
  cursor: pointer;
  font-family:inherit;
  font-size:13px;
  padding:15px 30px;
  transition: all .5s;
  font-weight:normal;

  &:hover{
    background: #ce3232;
    border-color: transparent;
    color: #ffffff;
  }
`;

