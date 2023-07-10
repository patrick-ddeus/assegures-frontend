/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react';

import AddressApi from '../../../service/address';
import PropertyApi from '../../../service/property';

import Dropdown from '../../../components/Dropdown';

import {
  Container,
  Input,
  InputArea,
  SearchButton,
  SuggestList,
  ExternalContainer,
  InputGroup,
} from './styles';

import { useNavigate } from 'react-router-dom';

import GoalData from './OptionsData/goal-data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FILTER':
      return {
        ...state,
        [action.filterType]: [...state[action.filterType], action.filterValue],
      };
    case 'REMOVE_FILTER':
      return {
        ...state,
        [action.filterType]: state[action.filterType].filter(
          (value) => value !== action.filterValue
        ),
      };
    case 'ADD_FILTER_STRING':
      return { ...state, [action.filterType]: action.filterValue };
    case 'RESET_FILTER':
      return {
        cities: [],
        districts: [],
        streets: [],
        goal: 'Comprar',
      };
    default:
      return state;
  }
};

const Filters = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [invalidInput, setInvalidInput] = React.useState(false);
  const [suggests, setSuggests] = React.useState([]);
  const [propertyList, setPropertyList] = React.useState([]);
  const [hideSuggest, setHideSuggest] = React.useState(true);
  const [propertyTextInput, setpropertyTextInput] = React.useState('Casa');

  const navigate = useNavigate();

  const [filters, dispatch] = useReducer(reducer, {
    cities: [],
    districts: [],
    streets: [],
    goal: 'Comprar',
    propertyType: 1,
    propertySubType: 1,
  });

  const handleChange = (event) => {
    setInputValue(event.target.value);

    if (suggests.length > 0 || inputValue.length > 1) {
      setHideSuggest(false);
    }
  };

  const handleToggleHideSuggest = () => {
    if (suggests.length > 0) {
      setHideSuggest(!hideSuggest);
    }
  };

  const handleButtonClick = async () => {
    if (
      filters.cities.length === 0 &&
      filters.districts.length === 0 &&
      filters.streets.length === 0
    ) {
      setInvalidInput(true);
      return;
    } else {
      setInvalidInput(false);
    }

    const queryParams = new URLSearchParams(filters);
    console.log(queryParams);
    try {
      await PropertyApi.getPropertiesWithFilter(queryParams);
      navigate(`/${filters.goal}/imoveis?${queryParams}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleToggleFilter = (filterType, filterValue) => {
    const actionType = filters[filterType].includes(filterValue)
      ? 'REMOVE_FILTER'
      : 'ADD_FILTER';
    dispatch({ type: actionType, filterType, filterValue });
  };

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const types = await PropertyApi.getPropertiesTypes();
        console.log(types);
        setPropertyList(types);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTypes();
  }, []);

  useEffect(() => {
    const fetchSuggest = async () => {
      try {
        const results = await AddressApi.getAddress(inputValue, filters.goal);
        setSuggests(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (inputValue.length > 1) {
      fetchSuggest();
    }
  }, [inputValue]);

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <ExternalContainer>
      <h2>Seu imóvel ideal aqui</h2>
      <Container>
        <InputGroup aria-label="multiselect">
          <label htmlFor="finalidade">Finalidade</label>
          <Dropdown label={filters.goal} labelId={'finalidade'} top={'55px'}>
            {GoalData.map((options) => (
              <li
                key={options.value}
                onClick={() =>
                  dispatch({
                    type: 'ADD_FILTER_STRING',
                    filterType: 'goal',
                    filterValue: options.name,
                  })
                }
              >
                {options.name}
              </li>
            ))}
          </Dropdown>
        </InputGroup>

        <InputGroup aria-label="multiselect">
          <label htmlFor="tipo-imovel">Tipo de Imóvel</label>
          <Dropdown
            label={propertyTextInput}
            labelId={'tipo-imovel'}
            top={'55px'}
          >
            {propertyList?.map((property) => (
              <div key={property.id}>
                <h4>{property.type_name}</h4>
                {property.sub_types.map((sub_type) => (
                  <li
                    key={sub_type.id}
                    onClick={() => {
                      dispatch({
                        type: 'ADD_FILTER_STRING',
                        filterType: 'propertyType',
                        filterValue: property.id,
                      });
                      dispatch({
                        type: 'ADD_FILTER_STRING',
                        filterType: 'propertySubType',
                        filterValue: sub_type.id,
                      });
                      setpropertyTextInput(sub_type.name);
                    }}
                  >
                    {sub_type.name}
                  </li>
                ))}
              </div>
            ))}
          </Dropdown>
        </InputGroup>

        <InputArea>
          <InputGroup>
            <label htmlFor="input-search">Onde deseja morar?</label>
            <Input
              type="text"
              id="input-search"
              placeholder="Pesquise nome da rua, cidade ou bairro"
              onChange={handleChange}
              onClick={handleToggleHideSuggest}
              value={inputValue}
              isInvalid={invalidInput}
            />
          </InputGroup>
          <SuggestList hide={hideSuggest}>
            {suggests.length > 0 ? (
              <div>
                <div className="divider cities">
                  <p className="title">Cidade</p>
                  <ul className="list city-list">
                    {suggests[0]?.cities?.map((item) => (
                      <>
                        <li key={item.id}>
                          <input
                            type="checkbox"
                            checked={filters.cities.includes(item.city)}
                            onClick={() =>
                              handleToggleFilter('cities', item.city)
                            }
                          />
                          <span>
                            {item.city} - {item.state}
                          </span>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
                <div className="divider districts">
                  <p className="title">Bairros</p>
                  <ul className="list district-list">
                    {suggests[0]?.districts?.map((item) => (
                      <>
                        <li key={item.id}>
                          <input
                            type="checkbox"
                            checked={filters.districts.includes(item.district)}
                            onClick={() =>
                              handleToggleFilter('districts', item.district)
                            }
                          />

                          <span>
                            {item.district}, {item.city} - {item.state}
                          </span>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
                <div className="divider streets">
                  <p className="title">Ruas</p>
                  <ul className="list street-list">
                    {suggests[0]?.streets?.map((item) => (
                      <>
                        <li key={item.id}>
                          <input
                            type="checkbox"
                            checked={filters.streets.includes(item.street)}
                            onClick={() =>
                              handleToggleFilter('streets', item.street)
                            }
                          />
                          <span>
                            {item.street}, {item.district}, {item.city} -{' '}
                            {item.state}
                          </span>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="not-found">Não foram encontrados resultados</div>
            )}
          </SuggestList>
        </InputArea>
        <InputGroup>
          <label htmlFor="">Pesquisar</label>
          <SearchButton onClick={handleButtonClick}>Buscar</SearchButton>
        </InputGroup>

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
