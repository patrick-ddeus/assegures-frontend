import React, { useEffect, useReducer } from 'react';
import AddressApi from '../../../service/address';
import PropertyApi from '../../../service/property';
import { Select, Container, Input, InputArea, SearchButton, SuggestList, ExternalContainer } from './styles';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_FILTER":
            return { ...state, [action.filterType]: [...state[action.filterType], action.filterValue] };
        case "REMOVE_FILTER":
            return { ...state, [action.filterType]: state[action.filterType].filter(value => value !== action.filterValue) };
        default:
            return state;
    }
};
const Filters = () => {
    const [inputValue, setInputValue] = React.useState('');
    const [inputFilter, setInputFilter] = React.useState([]);
    const [hideSuggest, setHideSuggest] = React.useState(true);

    const [filters, dispatch] = useReducer(reducer, {
        cities: [],
        districts: [],
        streets: []
    });

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

    const handleButtonClick = async () => {
        const queryParams = new URLSearchParams(filters);

        try {
            const resultado = await PropertyApi.getPropertiesWithFilter(queryParams)
        } catch (error) {

        }
    }

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

    const handleToggleFilter = (filterType, filterValue) => {
        const actionType = filters[filterType].includes(filterValue) ? 'REMOVE_FILTER' : 'ADD_FILTER';
        dispatch({ type: actionType, filterType, filterValue });
    };

    return (
        <ExternalContainer>
            <h2>Seu imóvel ideal aqui</h2>
            <Container>
                <Select id="finalidade">
                    <option value="">Finalidade</option>
                    <option value="compra">Compra</option>
                    <option value="aluguel">Aluguel</option>
                </Select>
                
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
                                            <>
                                                <li key={item.id}>
                                                    <input
                                                        type="checkbox"
                                                        checked={filters.cities.includes(item.city)}
                                                        onClick={() => handleToggleFilter('cities', item.city)} />
                                                    <span>{item.city} - {item.state}</span>
                                                </li>
                                            </>
                                        ))}
                                    </ul>
                                </div>
                                <div className="divider districts">
                                    <p className="title">
                                        Bairros
                                    </p>
                                    <ul className="list district-list">
                                        {inputFilter[0].districts.map((item) => (
                                            <>
                                                <li key={item.id} >
                                                    <input
                                                        type="checkbox"
                                                        checked={filters.districts.includes(item.district)}
                                                        onClick={() => handleToggleFilter('districts', item.district)}
                                                    />

                                                    <span>{item.district}, {item.city} - {item.state}</span>
                                                </li>
                                            </>
                                        ))}
                                    </ul>
                                </div>
                                <div className="divider streets">
                                    <p className="title">
                                        Ruas
                                    </p>
                                    <ul className="list street-list">
                                        {inputFilter[0].streets.map((item) => (
                                            <>
                                                <li key={item.id}>
                                                    <input
                                                        type="checkbox"
                                                        checked={filters.streets.includes(item.street)}
                                                        onClick={() => handleToggleFilter('streets', item.street)}
                                                    />
                                                    <span>{item.street}, {item.district}, {item.city} - {item.state}</span>
                                                </li>
                                            </>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <div className="not-found">
                                Não foram encontrados resultados
                            </div>
                        )}
                    </SuggestList>
                </InputArea>
                <SearchButton onClick={handleButtonClick}>
                    Buscar
                </SearchButton>

                {/* <Select id="ordenar">
                <option value="">Ordenar</option>
                <option value="preco-asc">Menores Valores</option>
                <option value="preco-desc">Maiores Valores</option>
            </Select> */}
            </Container>
        </ExternalContainer>
    );
};

export default Filters;
