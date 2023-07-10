import React, { useEffect, useState, useReducer } from 'react';

import Header from '../../components/Header';
import SuggestList from '../../components/SuggestList';
import Dropdown from '../../components/Dropdown';

import PropertyApi from '../../service/property';
import AddressApi from '../../service/address';
import GoalData from '../HomePage/Filters/OptionsData/goal-data';

import { IoClose } from 'react-icons/io5';

import {
  Container,
  Banner,
  GridColumn,
  GridContainer,
  FirstSection,
  InputGroup,
  FilterList,
  FilterItem,
  FilterGroup,
  SecondSection,
} from './styles';

import { useSearchParams, useParams } from 'react-router-dom';

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
    default:
      return state;
  }
};

function PropertiesPage() {
  const { finalidade } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [suggests, setSuggests] = useState([]);
  const [hideSuggest, setHideSuggest] = useState(true);
  const [localeInput, setLocaleInput] = useState('');
  const [propertyList, setPropertyList] = useState([]);
  const [propertyTextInput, setpropertyTextInput] = useState('Casa');
  const [isLoading, setIsLoading] = useState(false);

  const cities = searchParams
    .get('cities')
    ?.split(',')
    .filter((city) => city !== '');
  const districts = searchParams
    .get('districts')
    ?.split(',')
    .filter((district) => district !== '');
  const streets = searchParams
    .get('streets')
    ?.split(',')
    .filter((street) => street !== '');
  const propertyType = searchParams.get('propertyType');
  const propertySubType = searchParams.get('propertySubType');

  const [filters, dispatch] = useReducer(reducer, {
    cities: cities || [],
    districts: districts || [],
    streets: streets || [],
    goal: finalidade,
    propertyType: propertyType || 1,
    propertySubType: propertySubType || 1,
  });

  const [properties, setProperties] = useState([]);

  const handleSelectFilter = (filterType, filterValue) => {
    // Verifica se o filtro já foi adicionado
    if (!filters[filterType].includes(filterValue)) {
      dispatch({ type: 'ADD_FILTER', filterType, filterValue });
    }
    setHideSuggest(true);
  };

  const handleChange = (event) => {
    setLocaleInput(event.target.value);

    if (suggests.length > 0 || localeInput.length > 1) {
      setHideSuggest(false);
    }
  };

  const handleToggleHideSuggest = () => {
    if (suggests.length > 0) {
      setHideSuggest(!hideSuggest);
    }
  };

  const removeFilter = (filterType, filterValue) => {
    dispatch({ type: 'REMOVE_FILTER', filterType, filterValue });
  };

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const types = await PropertyApi.getPropertiesTypes();
        setPropertyList(types);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTypes();
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(filters);
    setSearchParams(queryParams);

    const fetchProperties = async () => {
      try {
        const properties = await PropertyApi.getPropertiesWithFilter(
          queryParams
        );
        setProperties(properties);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProperties();
  }, [filters, setSearchParams]);

  useEffect(() => {
    const fetchSuggest = async () => {
      try {
        const results = await AddressApi.getAddress(localeInput, filters.goal);
        setSuggests(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (localeInput.length > 1) {
      fetchSuggest();
    }
  }, [localeInput, filters.goal]);

  return (
    <Container>
      <Header />
      <Banner />
      <main>
        <h3>
          Imóveis | Foram encontrados{' '}
          {properties[properties?.length - 1]?.totalCount} Imóveis
        </h3>
        <GridContainer>
          <GridColumn>
            <FirstSection>
              <h4 className="subtitle">Geral</h4>
              <InputGroup>
                <label htmlFor="finalidade">O que você deseja?</label>
                <Dropdown
                  label={filters.goal}
                  labelId={'finalidade'}
                  top={'55px'}
                >
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
              <InputGroup>
                <label htmlFor="locale">Localização do Imóvel</label>
                <input
                  type="text"
                  id="locale"
                  placeholder="cidades, bairros, ruas"
                  onChange={handleChange}
                  onClick={handleToggleHideSuggest}
                  vale={localeInput}
                />
                <SuggestList
                  filters={filters}
                  handleSelectFilter={handleSelectFilter}
                  suggests={suggests}
                  hide={hideSuggest}
                  minimized={true}
                />
              </InputGroup>
              {filters.cities.length !== 0 && (
                <FilterGroup>
                  <p>Cidades</p>
                  <FilterList>
                    {filters.cities.map((city) => (
                      <FilterItem
                        onClick={() => removeFilter('cities', city)}
                        key={city}
                      >
                        {city !== '' && city}
                        <IoClose />
                      </FilterItem>
                    ))}
                  </FilterList>
                </FilterGroup>
              )}

              {filters.districts.length !== 0 && (
                <FilterGroup>
                  <p>Bairros</p>
                  <FilterList>
                    {filters.districts.map((district) => (
                      <FilterItem
                        onClick={() => removeFilter('districts', district)}
                        key={district}
                      >
                        {district}
                        <IoClose />
                      </FilterItem>
                    ))}
                  </FilterList>
                </FilterGroup>
              )}

              {filters.streets.length !== 0 && (
                <FilterGroup>
                  <p>Ruas</p>
                  <FilterList>
                    {filters.streets.map((street) => (
                      <FilterItem
                        onClick={() => removeFilter('streets', street)}
                        key={street}
                      >
                        {street !== '' && street}
                        <IoClose />
                      </FilterItem>
                    ))}
                  </FilterList>
                </FilterGroup>
              )}
              <InputGroup>
                <label htmlFor="property-type">Tipo de imóvel</label>
                <Dropdown
                  top={'50px'}
                  label="Mostrar todos"
                  labelId={'property-type'}
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
            </FirstSection>
            <SecondSection></SecondSection>
          </GridColumn>
          <GridColumn>
            <ul>
              {properties?.map((property) => (
                <li key={property.id}>{property.title}</li>
              ))}
            </ul>
          </GridColumn>
        </GridContainer>
      </main>
    </Container>
  );
}

export default PropertiesPage;
