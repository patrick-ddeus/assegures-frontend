import React from 'react';

import { Container, GridContainer, GridItem, CopyrightContainer } from './styles';

function Footer() {
    const date = new Date()
    return (
        <>
            <Container>
                <GridContainer>
                    <GridItem>
                        <p className="title">Agro<span>Gouveia</span></p>
                    </GridItem>
                    <GridItem>
                        <h4>AgroGouveia</h4>
                        <p>Avenida Presidente Juscelino Kubitscheck, 2041 - Complexo JK, Torre B - 5ª andar, Vila Olímpia - São Paulo/SP, 04543-011</p>
                    </GridItem>
                    <GridItem>
                        <h4>Menu</h4>
                        <ul>
                            <li>Início</li>
                            <li>Sobre</li>
                            <li>Alugar</li>
                            <li>Anuncie seu Imóvel</li>
                            <li>Contato</li>
                        </ul>
                    </GridItem>
                    <GridItem>
                        <h4>Contato</h4>
                        <p>Email</p>
                    </GridItem>
                </GridContainer>
            </Container >
            <CopyrightContainer>
                <p>© Copyright {date.getFullYear()} - AgroGouveia - Todos os direitos reservados</p>
            </CopyrightContainer>
        </>
    );
}

export default Footer;