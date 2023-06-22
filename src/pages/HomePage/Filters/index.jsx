import React, { useEffect } from 'react';
import AddressApi from '../../../service/address';
import { Select, Container, Input, InputArea, SearchButton, SuggestList } from './styles';

const filters = {
    cities: ['São Paulo', 'Rio de Janeiro'],
    districts: ['Copacabana', 'Ipanema'],
    streets: ['Avenida Paulista', 'Ipanema Beach']
  };

const queryParams = new URLSearchParams(filters);
const url = `/imoveis?${queryParams}`;
console.log(url)

const Filters = () => {
    const [inputValue, setInputValue] = React.useState('');
    const [inputFilter, setInputFilter] = React.useState([]);
    const [hideSuggest, setHideSuggest] = React.useState(true);

    const handleChange = (event) => {
        setInputValue(event.target.value);

        if (inputFilter.length > 0 || inputValue.length > 1) {
            setHideSuggest(false);
        }
    };

    const handleToggleHideSuggest = () => {
        if (inputFilter.length > 0) {
            setHideSuggest(!hideSuggest);
        }
    };

    useEffect(() => {
        const fetchSuggest = async () => {
            try {
                const results = await AddressApi.getAddress(inputValue);
                setInputFilter(results);
            } catch (error) {
                console.log(error.message);
            }
        };
        if (inputValue.length > 1) {
            fetchSuggest();
        }
    }, [inputValue]);

    return (
        <Container>
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
            <InputArea>
                <Input
                    type="text"
                    id=""
                    placeholder='Pesquise nome da rua, cidade ou bairro'
                    onChange={handleChange}
                    onClick={handleToggleHideSuggest}
                    value={inputValue}
                />
                <SuggestList hide={hideSuggest}>
                    {inputFilter?.length !== 0 ? (
                        <>
                            <div className="divider cities">
                                <p className="title">
                                    Cidade
                                </p>
                                <ul className="list city-list">
                                    {inputFilter[0].cities.map((item) => (
                                        <li key={item.id} onClick={() => setInputValue(item.city)}>
                                            {item.city} - {item.state}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="divider districts">
                                <p className="title">
                                    Bairros
                                </p>
                                <ul className="list district-list">
                                    {inputFilter[0].districts.map((item) => (
                                        <li key={item.id} onClick={() => setInputValue(item.district)}>
                                            {item.district}, {item.city} - {item.state}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="divider streets">
                                <p className="title">
                                    Ruas
                                </p>
                                <ul className="list street-list">
                                    {inputFilter[0].streets.map((item) => (
                                        <li key={item.id} onClick={() => setInputValue(item.street)}>
                                            {item.street}, {item.district}, {item.city} - {item.state}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    ) : (
                        <div>
                            Não foram encontrados resultados
                        </div>
                    )}
                </SuggestList>
            </InputArea>
            <SearchButton>
                Buscar
            </SearchButton>

            {/* <Select id="ordenar">
                <option value="">Ordenar</option>
                <option value="preco-asc">Menores Valores</option>
                <option value="preco-desc">Maiores Valores</option>
            </Select> */}
        </Container>
    );
};

export default Filters;
