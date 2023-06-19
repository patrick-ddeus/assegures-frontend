import React from 'react';

import { Container } from './styles';

function Card({ children, quantidade, descricao }) {
    return (
        <Container>
            <span>
                {children}
            </span>
            <p>{quantidade}</p>
            <p>{descricao}</p>
        </Container>
    );
}

export default Card;