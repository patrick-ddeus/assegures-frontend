import React, { useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaBed, FaShower, FaCarAlt, FaExpand, FaChevronLeft, FaChevronRight, FaRegArrowAltCircleRight } from "react-icons/fa";

import { Container, ImageDiv, DescDiv, PriceDiv, Title, Details, MoreDetailsButton, Label } from './styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [
    "https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grq6lwb4htd1/b/tecimob-production/o/media/88ceb2c1-7577-4909-bcb3-9d986c3c121f/properties/8ac84fe2-2841-4d17-91cf-a6fcb9fc587d/images/600x450/outside/57db4ed4-0524-47cb-bfb2-560b8f00bf241687022736wOda.jpg",
    "https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grq6lwb4htd1/b/tecimob-production/o/media/88ceb2c1-7577-4909-bcb3-9d986c3c121f/properties/8ac84fe2-2841-4d17-91cf-a6fcb9fc587d/images/600x450/outside/5687ac13-3b36-4e9c-b1dd-9acd1cbce9761687022736DLEB.jpg",
    "https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grq6lwb4htd1/b/tecimob-production/o/media/88ceb2c1-7577-4909-bcb3-9d986c3c121f/properties/8ac84fe2-2841-4d17-91cf-a6fcb9fc587d/images/600x450/outside/f5f0e590-2ad9-4898-849e-9a594b1c0da81687022736rRvI.jpg"
];

function ImmobileCard({ id }) {
    const [zoom, setZoom] = useState(false);

    return (
        <Container>
            <ImageDiv zoom={zoom} >
                <div className={`nav-btn next-btn sold-next-btn${id}`}>
                    <FaChevronRight />
                </div>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    navigation={{
                        nextEl: `.sold-next-btn${id}`,
                        prevEl: `.sold-prev-btn${id}`
                    }}
                    loop={true}
                    paceBetween={50}
                >
                    {images.map((image) => (
                        <SwiperSlide>
                            <div className="overlay" onMouseEnter={() => setZoom(true)} onMouseOut={() => setZoom(false)} />
                            <img src={image} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={`nav-btn prev-btn sold-prev-btn${id}`} >
                    <FaChevronLeft />
                </div>
            </ImageDiv>
            <DescDiv>
                <PriceDiv>
                    <p>Casa</p>
                    <p>R$ 480.000</p>
                </PriceDiv>
                <Title>
                    <h4>Cobertura para venda no Campo Belo</h4>
                </Title>
                <p className="address">Mutuá, São Gonçalo</p>
                <p className="ref"><span>Ref</span>: 0003</p>
                <Details>
                    <div>
                        <FaBed />
                        <span>3</span>
                    </div>
                    <div>
                        <FaShower />
                        <span>2</span>
                    </div>
                    <div>
                        <FaCarAlt />
                        <span>3</span>
                    </div>
                    <div>
                        <FaExpand />
                        <span>80m²</span>
                    </div>
                </Details>

                <div className="text-container">
                    <p className="truncated-text">
                        Linda casa de padrão moderna, dentro de condomínio fechado.
                    </p>
                </div>

                <MoreDetailsButton>
                    Mais Detalhes do Imóvel
                </MoreDetailsButton>
                <Label>
                    <FaRegArrowAltCircleRight />
                    <span>Venda</span>
                </Label>
            </DescDiv>
        </Container>
    );
}

export default ImmobileCard;