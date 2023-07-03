import styled from 'styled-components';

export const Container = styled.div`
  margin-top:10px;
  padding:40px 10px 20px;
  width:100%;
  position:absolute;
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