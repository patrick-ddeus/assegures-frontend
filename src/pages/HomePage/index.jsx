import React from 'react';
import Footer from '../../components/Footer';
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
            <main>
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

                        </BannerVideo>
                    </BannerContent>
                </Banner>
                <ImovelSection>
                    <h2 className="section-title">Encontre o Imóvel dos seus sonhos</h2>
                    <Filters />
                    <CarouselComponent />
                </ImovelSection>
                <ImovelToSendSection>
                    <h2 className="section-title">Imóveis à venda</h2>
                    <div className="card-container">
                        <ImmobileCard id={1} />
                        <ImmobileCard id={2} />
                        <ImmobileCard id={3} />
                        <ImmobileCard id={4} />
                    </div>
                </ImovelToSendSection>
                <WhatsAppSnippet />
            </main>
            <Footer />
        </Container>
    );
};

export default HomePage;
