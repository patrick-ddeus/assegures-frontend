import React from 'react';
import Header from '../../components/Header';
import { Container, Banner, BannerContent, BannerButtom, BannerText, BannerVideo } from './styles';

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
            <section className="teste">
                <h2>Encontre seu imóvel ideal</h2>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </section>
        </Container>
    );
};

export default HomePage;
