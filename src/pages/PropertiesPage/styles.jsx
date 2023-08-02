import styled from 'styled-components';
import banner from '../../assets/img/banner.jpg';

export const Container = styled.div`
  height: 100%;
  font-family: 'Poppins', sans-serif;

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
    content: '';
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
  grid-column-gap: 10px;
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

export const Property = styled.div``;

