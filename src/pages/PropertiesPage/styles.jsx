import styled from "styled-components";
import banner from "../../assets/img/banner.jpg";
import { IoMdBed, IoMdCar, IoMdQrScanner } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

// Container Styles
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

// Banner Styles
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

// Grid Styles
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

// Property Styles
export const Properties = styled.div`
  display: flex;
  gap: 15px;
`;

export const Property = styled.div`
  width: 100%;
  max-width: 380px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
`;

// Property Image Styles
export const PropertyImage = styled.div`
  & > img {
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }
`;

// Property Description Styles
export const PropertyDescription = styled.div`
  padding: 20px;
  color: rgb(60, 72, 88);

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
    font-size: 14px;
    margin-top: 20px;
  }

  p:nth-child(4) {
    font-size: 17px;
    font-weight: 600;
    margin-top: 20px;
  }
`;

// Contact Area Styles
export const ContactArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

// Details Button Styles
export const DetailsButton = styled.button`
  border: 2px solid #68d391;
  width: 160px;
  height: 45px;
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

// Email Button Styles
export const EmailButton = styled.button`
  background-color: #68d391;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Email Icon Styles
export const StyledEmail = styled(IoMailOutline)`
  font-size: 32px;
  color: white;
`;

// Characteristics Styles
export const Characteristics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;

  span {
    display: flex;
    align-items: center;
  }
`;

// Bed Icon Styles
export const StyledBed = styled(IoMdBed)`
  font-size: 22px;
  margin-right: 6px;
`;

// Car Icon Styles
export const StyledCar = styled(IoMdCar)`
  font-size: 20px;
  margin-right: 8px;
`;

// Scanner Icon Styles
export const StyledScanner = styled(IoMdQrScanner)`
  font-size: 20px;
  margin-right: 8px;
`;

// Bath Icon Styles
export const StyledBath = styled(FaBath)`
  font-size: 17px;
  margin-right: 11px;
`;
