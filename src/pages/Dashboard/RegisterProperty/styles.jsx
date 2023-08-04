import styled from 'styled-components';

export const Container = styled.div`
font-family:"Poppins", sans-serif;
  .divider {
    display: flex;
    align-items: center;
    margin-bottom:10px;
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

export const WarningParagraph = styled.p`
  font-size:15px;
  margin-bottom:20px;
`;

export const GridContainer = styled.div`
  display:grid;
  grid-template-columns:${({grid}) => grid};
  grid-column-gap:10px;

  margin: 5px 0;
`;

export const GridColumn = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
`;

export const GridTwoColumns = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap:10px;
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

export const SelectAddress = styled.select`
    width: 100%;
    min-height: 46px;
    padding: 0 10px;
    font-size: 15px;
    background-color: #fff;
    border: 1px solid #cfd4dd;
    border-radius: 5px;
    cursor: pointer;
    transition:all .2s ease;
    color:#5e6a82;

    option:first-child{
      color:white;
    }
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

  margin-top:${({mt}) => mt};

  &::placeholder{
    color:#5e6a82;
    font-weight:400;
  }

  &:invalid{
    border:1px solid red;
    outline:0;
  }

`;

export const FirstGroup = styled.div`
  
`;

export const RadioGroup = styled.div`
  height:100%;
  display:flex;
  align-items:center;
  gap:15px;

  label{
    display:flex;
    align-items:center;
    gap:5px;
    font-size:14px;
  }
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