import React from 'react';
import { Select, Container } from './styles';

const Filters = () => {
    return (
        <Container>
            <div className="select-group">
                <Select id="finalidade">
                    <option value="">Finalidade</option>
                    <option value="compra">Compra</option>
                    <option value="aluguel">Aluguel</option>
                </Select>

                <Select id="tipo-imovel">
                    <option value="">Tipo</option>
                    <option value="casa">Casa</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="terreno">Terreno</option>
                </Select>

                <Select id="cidade">
                    <option value="">Cidade</option>
                    <option value="sao-paulo">São Paulo</option>
                    <option value="rio-de-janeiro">Rio de Janeiro</option>
                    <option value="belo-horizonte">Belo Horizonte</option>
                </Select>

                <Select id="bairro">
                    <option value="">Bairro</option>
                    <option value="centro">Centro</option>
                    <option value="jardins">Jardins</option>
                    <option value="copacabana">Copacabana</option>
                </Select>
            </div>

            <Select id="ordenar">
                <option value="">Ordenar</option>
                <option value="preco-asc">Menores Valores</option>
                <option value="preco-desc">Maiores Valores</option>
            </Select>
        </Container>
    );
};

export default Filters;
