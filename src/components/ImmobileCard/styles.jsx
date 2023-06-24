import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width:295px;
  height:400px;
  border-top-right-radius:23px;
  border-top-left-radius:23px;
  font-family:"Poppins", sans-serif;
  cursor:pointer;
  transition: all .7s ease;

`;

export const ImageDiv = styled.div`
  overflow:hidden;
  border-top-right-radius:20px;
  border-top-left-radius:20px;
  position:relative;
  cursor:pointer;

  &:hover{
    .next-btn{
        opacity:1;
    }

    .prev-btn{
        opacity:1;
    }
  }
  
  .overlay{
    transition:opacity 2s ease;
    background-color:black;
    opacity:${({ zoom }) => zoom ? `0.2` : `0.54`};
    position:absolute;
    width:100%;
    height:100%;
    z-index:2;
  }
  
  img{
    transition: all 1s ease;
    height:${({ zoom }) => zoom ? `250px` : `184px`};
    width:${({ zoom }) => zoom ? `120%` : `100%`};;
    object-fit: cover;
    transform: ${({ zoom }) => zoom ? `scale(1.1)` : `scale(1)`};
  }

  .nav-btn{
    position:absolute;
    width:24px;
    height:24px;
    background-color:white;
    font-size:14px;
    z-index:9;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:opacity .2s ease, top 1s ease;
    opacity:0;

    top: ${({ zoom }) => zoom ? `120px` : `80px`};
  }

  .next-btn{
    right:10px;
  }

  .prev-btn{
    left:10px;
  }

`;

export const DescDiv = styled.div`
  background-color:white;
  position:relative;
  transition: all .2s ease;
  top:${({ isHovering }) => isHovering ? '0' : '-10px'};
  z-index:5;
  padding:20px;

  .address{
    color:#2ecc71;
    padding:10px 0;
  }

  .ref{
    span{
        font-weight:600;
        color:#3a3a3a;
    }
  }

  .text-container{
    width:250px;
  }

  .truncated-text{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* Número de linhas desejado */
      overflow: hidden;
      text-overflow: ellipsis;
      font-size:15px;
      line-height:1.5;
      margin-top:10px;
      color:#1f1f1f;
  }


`;

export const PriceDiv = styled.div`
  position:absolute;
  top:-60px;
  left:30px;

  p:nth-child(1){
    color:#2ecc71;
    font-size:23px;
    font-weight:500;
}

  p:nth-child(2){
    color: #FFF;
    font-size: 29px;
    font-weight: 600;
    letter-spacing: -1.2px;
    text-align: left;
  }
`;

export const Title = styled.div`
  font-size: 18px;
    font-weight: 500;
    color:#002337;
`;

export const Details = styled.div`
  display:flex;
  gap:10px;
  margin-top:10px;

  svg{
    font-size:16px;
  }

  div{
    display:flex;
    align-items:center;
    gap:5px;
  }
`;

export const MoreDetailsButton = styled.button`
  width:100%;
  padding:10px 0;
  background-color:#2ecc71;
  border-radius:5px;
  margin-top:10px;
  color: #3a3a3a;
  font-size:15px;
  font-weight:500;
  transition:all .2s ease;
  
  &:hover{
    background-color:#3a3a3a;
    color:white;
  }
`;

export const Label = styled.div`
  position:absolute;
  top:-160px;
  right:10px;
  display:flex;
  align-items:center;
  gap:5px;
  background-color:#2ecc71;
  color:#3a3a3a;
  padding:10px 9px;
  border-radius:20px;
  font-weight:500;
  transition:opacity .4s ease;
  opacity:${({ isHovering }) => isHovering ? '0' : '1'};
`;