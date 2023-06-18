import React from 'react';
import Home from "../../../assets/img/home.jpg";
import { FaBed, FaCarAlt, FaExpand } from "react-icons/fa";
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { ExternalContainer, Container, ImageContainer, DescContainer, DescTitle, IconDiv, NextButton, PreviousButton } from './styles';

const CarouselComponent = () => {
    return (
        <ExternalContainer>
            <div className="prev-btn">
                <IoChevronBackSharp />
            </div>
            <Swiper
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                effect="fade"
                fadeEffect={{
                    crossfade: true
                }}
                navigation={{
                    nextEl: '.next-btn',
                    prevEl: '.prev-btn',
                }}
            >
                <SwiperSlide>
                    <Container>
                        <ImageContainer>
                            <img src={Home} alt="" />
                        </ImageContainer>
                        <DescContainer>
                            <DescTitle>
                                Cobertura para venda no Campo Belo de 319m², 04 suítes, gourmet e piscina. 04 vagas.
                            </DescTitle>
                            <p className="py-2 address">
                                Campo Belo - São Paulo/SP, Zona Sul
                            </p>
                            <p className="py-3.5 price">R$1.290.000,00</p>
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
                                <FaExpand />
                                <span>75 metros</span>
                            </IconDiv>
                        </DescContainer>

                    </Container>
                </SwiperSlide>

                <SwiperSlide>
                    <Container>
                        <ImageContainer>
                            <img src={Home} alt="" />
                        </ImageContainer>
                        <DescContainer>
                            <DescTitle>
                                Cobertura para venda no Campo Belo de 319m², 04 suítes, gourmet e piscina. 04 vagas.
                            </DescTitle>
                            <p className="py-2 address">
                                Campo Belo - São Paulo/SP, Zona Sul
                            </p>
                            <p className="py-3.5 price">R$1.290.000,00</p>
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
                                <FaExpand />
                                <span>75 metros</span>
                            </IconDiv>
                        </DescContainer>
                    </Container>
                </SwiperSlide>
            </Swiper >
            <div className="next-btn">
                <IoChevronForwardSharp />
            </div>
        </ExternalContainer>
    );
};

export default CarouselComponent;
