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
  overflow:hidden;

  .section-title{
      margin-top:70px;
      margin-bottom:30px;
      font-size:2.2em;
      color:#002337;
      font-weight:500;
    }
`;


export const Banner = styled.div`
  height:100vh;
  min-height:500px;
  background:url(${banner});
  background-size:cover;
  background-position:0 80%;
  animation: ${kenburnsTop} 1.9s ease-out both;
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
    font-weight:600;
    font-size:3.5em;
    letter-spacing:-1px;
    margin-top:-40px;
    margin-bottom:20px;

    span:nth-child(1){
	    animation: ${fadeInLeft} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

    span:nth-child(2){
	    animation: ${fadeInLeft} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        animation-delay:.5s;
    }
  }

  p{
    width:500px;
    margin-bottom:50px;
    font-size:1.5em;
    font-weight:300;
    animation: ${fadeInLeft} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation-delay:.8s;
  }
`;

export const BannerVideo = styled.div`
    animation: ${fadeInLeft} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation-delay:2s;
  iframe{
    width:525px;
    height:295px;
  }
`;

export const BannerButtom = styled(Link)`
  border: 2px solid #f9f9f9;
  color: #f9f9f9;
  border-radius: 5px;
  cursor: pointer;
  font-family:inherit;
  font-size:13px;
  padding:15px 30px;
  transition: all .5s;
  font-weight:normal;
  animation: ${fadeInLeft} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation-delay:1.7s;

  &:hover{
    background: #2ecc71;
    border-color: transparent;
    color: #3a3a3a;
  }
`;

export const ImovelSection = styled.div`
    font-family:"Poppins", sans-serif;
    width:1200px;
    margin:0 auto;
`;

export const ImovelToSendSection = styled.div`
    width:1200px;
    margin:0 auto;
    margin-bottom:160px;

    h2.section-title{
      margin-top:20px;
    }

    .card-container{
      display:flex;
      gap:20px;
    }
`;