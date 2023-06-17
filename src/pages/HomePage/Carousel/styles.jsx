import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  margin-top:60px;
  margin-bottom:60px;
`;

export const ImageContainer = styled.div`
  width:900px;

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

export const IconDiv  = styled.div`
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