import styled from 'styled-components';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';

export const ExternalContainer = styled.div`
  position:relative;

  .next-btn{
    color: rgb(60, 72, 88);
    width: 60px;
    height: 60px;
    font-size: 48px;
    position:absolute;
    top:400px;
    right:-55px;
    z-index:888;
    cursor:pointer;
    transition: opacity .4s ease;

    &:hover{
      opacity: 0.5;
    }
  }

  .prev-btn{
    color: rgb(60, 72, 88);
    width: 60px;
    height: 60px;
    font-size: 48px;
    position:absolute;
    top:400px;
    left:-55px;
    z-index:888;
    cursor:pointer;

    &:hover{
      opacity: 0.5;
    }
  }
`;

export const Container = styled.div`
  display:flex !important;
  margin-top:60px;
  margin-bottom:60px;
  position:relative;

`;

export const ImageContainer = styled.div`
  width:800px;
  margin:0 auto;

  img{
    width:100%;
  }
`;

export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 380px;
  max-width: 100%;
  background-color: white;
  height: auto;
  margin: 15px 15px 15px 0px;
  box-shadow: rgba(115, 130, 151, 0.3) 0px 0px 10px 0px;
  z-index: 1;
  margin-left:-70px;

  .address{
    color: rgb(60, 72, 88);
    font-size: 14px;
  }

  .price{
    color: rgb(13, 13, 13);
    font-size: 24px;
    font-weight: 600;
  }

  .description{
    color: rgb(60, 72, 88);
    font-size: 14px;
    padding-bottom: 15px;
    white-space: pre-line;
  }
`;

export const DescTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: rgb(60, 72, 88);
`;

export const IconDiv = styled.div`
    display: flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: start;
    justify-content: flex-start;
    color: rgb(60, 72, 88);
    font-size: 14px;
    padding: 5px 0px;
    white-space: nowrap;
    gap:10px;
`;

export const PreviousButton = styled(IoChevronBackSharp)`
  background: transparent;
  color: inherit;
  width: 60px;
  height: 60px;
  font-size: 60px;
  display: flex !important;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  border:0;
  color:white;
  position:absolute;
  z-index:5;
  left:-18px;
  cursor:pointer;
  opacity: ${({ disabled }) => disabled ? "0.5" : "1"};
  overflow:visible;
`;