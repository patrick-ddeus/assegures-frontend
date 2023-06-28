import styled from "styled-components";
import banner from "../../assets/img/banner.jpg";

export const Container = styled.div`
  height:100%;
  font-family:"Poppins", sans-serif;

  h3{
    font-size:20px;
    color:#4F5968;
    font-weight:300;
    padding:20px 0;
  }

   h4{
    font-size:20px;
    font-weight:600;
    color:rgb(60, 72, 88);
    margin-bottom:15px;
  }

  main{
    max-width:1300px;
    width:100%;
    margin:0 auto;
  }
`;

export const Banner = styled.div`
  height:30vh;
  background:url(${banner});
  background-size:cover;
  background-position:0 70%;

  &::before{
    content: "";
    position: absolute;
    top: 0;
    height: 30vh;
    left: 0;
    right: 0;
    background-color: #0c0c0c;
    opacity: .72;
  }
`;

export const GridContainer = styled.section`
  color:black;
  display:grid;
  grid-template-columns:1fr 3fr;
  grid-column-gap: 10px;
`;

export const GridColumn = styled.div`
  height:250px;

 
`;

export const Property = styled.div`
  
`;

export const FirstSection = styled.section`
  padding:20px;
  background-color:white;
  height:100%;
  border: 1px solid rgba(226, 228, 232, 0.8);
  border-radius:7px;
`;

export const InputGroup = styled.div`
  label{
    font-size:13px;
    font-weight:500;
    text-transform:uppercase;
    color:rgb(60, 72, 88);
  }

  input{
    margin-top:8px;
    height:42px;
    width:100%;
    padding:0 15px;
    border:1px solid #cfd4dd;
    outline:0;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
    border-radius:5px;
    font-size:15px;
  }
`;

export const FilterList = styled.ul`
  display:flex;
  margin-top:10px;
`;

export const FilterItem = styled.li`
  border:1px solid green;
  border-radius:20px;
  padding:5px 10px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:10px;
  cursor:pointer;

  svg{
    font-size:15px;
  }
`;