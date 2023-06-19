import styled from 'styled-components';

export const Container = styled.div`
  font-family:"Poppins", sans-serif;
  width:300px;
  height:180px;
  background-color:white;
  border-radius:20px;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: flex-end;
  padding:20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position:relative;

  p:nth-child(2){
    font-size:48px;
    font-weight:600;
  }

  p:nth-child(3){
    font-size:20px;
  }

  span{
    position:absolute;
    left:20px;
    top:20px;
    
    svg{
        font-size:52px;
    }
  }
`;
