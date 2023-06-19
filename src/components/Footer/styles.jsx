import styled from 'styled-components';

export const Container = styled.footer`
  height:240px;
  width:100%;
  background-color:white;
  font-family:"Poppins", sans-serif;
`;

export const GridContainer = styled.div`
    height:100%;
    display:grid;
    grid-template-columns:2fr 3fr 1fr 1fr;
    gap:30px;

    .title{
        font-size:32px;
        text-align:center;
        margin-top:50px;

        span{
            transition:all .4s ease;
            color:#1f9b4c
        }
    }
`;

export const GridItem = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    padding-top:30px;

    h4{
        font-size: 16px;
        padding-bottom: 10px;
        color:rgb(60, 72, 88);
    }

    p, li{
        font-size: 14px;
        padding: 7.5px 0px;
        color: #3c4858;
        font-weight:300;
    }

    li{
        cursor:pointer;
    }
`;

export const CopyrightContainer = styled.div`
  width: 100%;
    padding: 20px 60px;
    display: flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: justify;
    justify-content: space-between;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0.2);
    color:#3c4858;
`;