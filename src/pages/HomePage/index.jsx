import React from 'react';
import Header from '../../components/Header';
import WhatsAppSnippet from '../../components/WhatsAppSnippet';
import CarouselComponent from './Carousel';
import Filters from './Filters';
import { Container, Banner, BannerContent, BannerButtom, BannerText, BannerVideo, ImovelSection } from './styles';

const HomePage = () => {
    return (
        <Container>
            <Header />
            <Banner>
                <BannerContent>
                    <BannerText>
                        <h2>
                            <span>Descubra o paraíso rural<br /></span> <span> Venda de fazendas Rio!</span>
                        </h2>
                        <BannerButtom>Contate</BannerButtom>
                    </BannerText>
                    <BannerVideo>
                        <iframe
                            src="https://www.youtube.com/embed/BHACKCNDMW8"
                            title="3 Hours of Amazing Nature Scenery &amp; Relaxing Music for Stress Relief."
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </BannerVideo>
                </BannerContent>
            </Banner>
            <ImovelSection>
                <h2 className="section-title">Encontre o Imóvel dos seus sonhos</h2>
                <Filters />
                <CarouselComponent />
            </ImovelSection>
            <WhatsAppSnippet />
        </Container>
    );
};

export default HomePage;
