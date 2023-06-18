import React from 'react';
import Header from '../../components/Header';
import ImmobileCard from '../../components/ImmobileCard';
import WhatsAppSnippet from '../../components/WhatsAppSnippet';
import CarouselComponent from './Carousel';
import Filters from './Filters';
import {
    Container,
    Banner,
    BannerContent,
    BannerButtom,
    BannerText,
    BannerVideo,
    ImovelSection,
    ImovelToSendSection
} from './styles';

const HomePage = () => {
    return (
        <Container>
            <Header />
            <Banner>
                <BannerContent>
                    <BannerText>
                        <h2>
                            <span>
                                Encontre Sua Nova Casa<br />
                            </span>
                            <span>
                                Hoje Conosco!
                            </span>
                        </h2>
                        <p>Encontrar a casa, o comércio ou o escritório que você vai adorar alugar ou comprar ficou mais fácil.</p>
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
            <ImovelToSendSection>
                <ImmobileCard />
            </ImovelToSendSection>
            <WhatsAppSnippet />
        </Container>
    );
};

export default HomePage;
