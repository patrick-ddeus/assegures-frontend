import styled from "styled-components";
import banner from "../../assets/img/banner.jpg";

export const Container = styled.div`
  height: 100%;
  font-family: "Poppins", sans-serif;

  h3 {
    font-size: 20px;
    color: #4f5968;
    font-weight: 300;
    padding: 20px 0;
  }

  .subtitle {
    font-size: 20px;
    font-weight: 600;
    color: rgb(60, 72, 88);
    margin-bottom: 15px;
  }

  main {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const Banner = styled.div`
  height: 30vh;
  background: url(${banner});
  background-size: cover;
  background-position: 0 70%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    height: 30vh;
    left: 0;
    right: 0;
    background-color: #0c0c0c;
    opacity: 0.72;
  }
`;

export const GridContainer = styled.section`
  color: black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 20px;
  margin-top: 40px;
`;

export const GridColumn = styled.div`
  .propertyDisplay {
    font-size: 22px;
    font-weight: 600;
    color: rgb(60, 72, 88);
    margin-bottom: 15px;
  }
`;

export const Properties = styled.div`
  display: flex;
  gap: 15px;
`;

export const Property = styled.div`
  min-height: 620px;
  width: 100%;
  max-width: 400px;
  background-color: white;
  border-radius: 15px;
`;

export const PropertyImage = styled.div`
  & > img {
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }
`;

export const PropertyDescription = styled.div`
  padding: 20px;
  p {
    margin: 10px 0;
  }

  p:first-child {
    font-size: 17px;
    font-weight: 600;
  }

  p:nth-child(2) {
    display: flex;
    gap: 5px;
  }

  p:nth-child(4) {
    font-size: 17px;
    font-weight: 600;
  }
`;

export const ContactArea = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 60px;
  padding: 20px;
`;

export const DetailsButton = styled.button`
  border: 2px solid #68d391;
  width: 160px;
  height: 50px;
  border-radius: 30px;
  transition: all 0.4s ease;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: 500;
  font-size: 15px;
  color: #68d391;

  &:hover {
    background-color: #68d391;
    color: white;
  }
`;
