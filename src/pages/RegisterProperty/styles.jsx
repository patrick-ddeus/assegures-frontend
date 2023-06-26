import styled from 'styled-components';

export const Container = styled.div`
font-family:"Poppins", sans-serif;
  .divider {
    display: flex;
    align-items: center;
  }

  .dots {
    font-size: 24px;
    font-weight: bold;
    margin-right: 5px;
    color:#3A3B3C;
  }

  .line {
    width:200px;
    height: 3px;
    background-color: #3A3B3C;
    margin-top:15px;
  }
`;

export const GridContainer = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap:10px;
  margin-top:40px;
`;

export const GridColumn = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
`;

export const GridThreeColumns = styled.div`
  display:grid;
  grid-template-columns:1fr 3fr 1fr;
   grid-column-gap:10px;
`;

export const AddressGridColumn = styled.div`
  display:grid;
  grid-template-columns:1fr 2fr 2fr;
   grid-column-gap:10px;
`;

export const GridTwoColumns = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap:10px;
`;

export const Form = styled.form`
  h3{
    font-size:1.7em;
    font-weight:600;
    text-transform:uppercase;
    margin-top:40px;
  }
`;

export const Input = styled.input`
  width:100%;
  padding:0 10px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  min-height:46px;
  border: 1px solid #cfd4dd;
  border-radius:5px;
  font-size:15px;

  &::placeholder{
    color:#5e6a82;
    font-weight:400;
  }

`;

export const FirstGroup = styled.div`
  
`;

export const RadioGroup = styled.div`
  
`;

export const SelectGroup = styled.div`
  
`;

export const TextArea = styled.textarea`
  width:100%;
  padding:20px 10px;
  min-height:46px;
  border: 1px solid #cfd4dd;
  border-radius:5px;
  font-size:15px;

  &::placeholder{
    color:#5e6a82;
    font-weight:400;
  }
`;