import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Home from "../../../assets/img/home.jpg";
import { FaBed, FaCarAlt, FaExpand } from "react-icons/fa";

import { Container, ImageContainer, DescContainer, DescTitle, IconDiv } from './styles';

const CarouselComponent = () => {

    return (
        <Container>
            <ImageContainer>
                <img src={Home} alt="" />
            </ImageContainer>
            <DescContainer>
                <DescTitle>
                    Cobertura para venda no Campo Belo de 319m², 04 suítes, gourmet e piscina. 04 vagas.
                </DescTitle>
                <p className="address">
                    Campo Belo - São Paulo/SP, Zona Sul
                </p>
                <p className="price">R$1.290.000,00</p>
                <p className="description">
                    Apartamento completamente reformado e com tudo de primeira linha.
                    72m², 2 dormitórios, sendo 1 suíte, 2 banheiros, cozinha estendida com iluminação de led, sala de tv, sala de jantar, andar alto com vista livre, ambientes integrados, ar condicionado em todos os ambientes, lavanderia, 2 vagas de garagem e pronto para morar.

                    Imóvel ideal para quem procura algo pronto e de qualidade.
                </p>
                <IconDiv>
                    <FaBed />
                    <span>2 Dormitórios</span>
                </IconDiv>
                <IconDiv>
                    <FaCarAlt />
                    <span>2 Garagens</span>
                </IconDiv>
                <IconDiv>
                    <FaExpand/>
                    <span>75 metros</span>
                </IconDiv>
            </DescContainer>
        </Container>
    );
};

export default CarouselComponent;
