import { useEffect } from 'react';
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
  BannerText,
  ImovelSection,
  ImovelToSendSection,
} from './styles';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <Banner>
          <BannerContent>
            <BannerText>
              <h2>
                <span>Ajudando você a encontrar o imóvel ideal!</span>
                <span>
                  Encontrar a casa, o comércio ou o escritório que você vai
                  adorar alugar ou comprar ficou mais fácil.
                </span>
              </h2>
            </BannerText>
          </BannerContent>
        </Banner>
        <ImovelSection>
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
