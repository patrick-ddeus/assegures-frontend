import styled from 'styled-components';
import banner from "../../assets/img/banner.jpg";

export const Banner = styled.div`
  height:100vh;
  background-image:linear-gradient(315deg, #20bf556e 0%, #01bbef61 74%), 
  url(${banner});
  background-size:cover;
  background-position:0 60%;
`;
