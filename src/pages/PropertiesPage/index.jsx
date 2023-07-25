/* eslint-disable react-hooks/exhaustive-deps */
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
  GoalDivider,
  CurrencyArea,
  RoomsArea,
  RoomOption,
} from './styles';

import { useSearchParams, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import CurencyInput from '../../components/CurrencyInput';

const MIN_PRICE_FILTER = '250.000';
const MAX_PRICE_FILTER = '1.500.000';
const MIN_AREA_FILTER = '0';
const MAX_AREA_FILTER = '8.200';

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
  const [isFocused, setIsFocused] = useState(false);

  const cities = searchParams
    .get('cities')
    ?.split(',')
    .filter(removeEmptyValues);
  const districts = searchParams
    .get('districts')
    ?.split(',')
    .filter(removeEmptyValues);
  const streets = searchParams
    .get('streets')
    ?.split(',')
    .filter(removeEmptyValues);

  function removeEmptyValues(value) {
    return value !== '';
  }

  const propertyType = searchParams.get('propertyType');
  const propertySubType = searchParams.get('propertySubType');

  const [filters, dispatch] = useReducer(reducer, {
    cities: cities || [],
    districts: districts || [],
    streets: streets || [],
    goal: finalidade,
    propertyType: propertyType || 1,
    propertySubType: propertySubType || 1,
    priceMin: MIN_PRICE_FILTER,
    priceMax: MAX_PRICE_FILTER,
    areaMin: MIN_AREA_FILTER,
    areaMax: MAX_AREA_FILTER,
  });

  const [properties, setProperties] = useState([]);

  const handleSelectFilter = (filterType, filterValue) => {
    if (valueNotInFilter(filterType, filterValue)) {
      dispatch({ type: 'ADD_FILTER', filterType, filterValue });
    }
    setHideSuggest(true);
  };

  function valueNotInFilter(filterType, filterValue) {
    return !filters[filterType].includes(filterValue);
  }

  const handleChange = (event) => {
    setLocaleInput(event.target.value);

    if (suggests.length > 0 || localeInput.length > 1) {
      setHideSuggest(false);
    }
  };

  const handleToggleHideSuggest = () => {
    if (suggests?.cities?.length > 0 || localeInput.length > 1) {
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
    if (!isFocused) {
      const queryParams = new URLSearchParams(nonEmptyFilters);
      setSearchParams(queryParams);

      const fetchProperties = async () => {
        try {
          const properties = await PropertyApi.getPropertiesByFilterObject(
            filters
          );
          setProperties(properties);
        } catch (error) {
          console.log(error.message);
        }
      };

      fetchProperties();
    }
  }, [filters, isFocused]);

  const nonEmptyFilters = useMemo(() => {
    return Object.entries(filters).reduce((acc, [key, value]) => {
      if (hasNonEmptyValue(value) && shouldExcludeAreaAndPriceFilters(key)) {
        acc[key] = value;
      }
      return acc;
    }, {});
  }, [filters]);

  function hasNonEmptyValue(value) {
    return value !== '' && value.length !== 0;
  }

  function shouldExcludeAreaAndPriceFilters(filterName) {
    return (
      filterName !== 'areaMin' &&
      filterName !== 'areaMax' &&
      filterName !== 'priceMin' &&
      filterName !== 'priceMax'
    );
  }

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
        <GridContainer>
          <GridColumn>
            <FirstSection>
              <h4 className="subtitle">Geral</h4>

              <GoalDivider>
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
              </GoalDivider>

              <InputGroup>
                <label htmlFor="locale">Localização do Imóvel</label>
                <input
                  className="localeInput"
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
                  label={propertyTextInput}
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
              <InputGroup>
                <label htmlFor="property-sub-type">Faixa de Imóvel (R$) </label>
                <CurrencyArea>
                  <CurencyInput
                    type="text"
                    value={filters.priceMin}
                    setValue={(value) =>
                      dispatch({
                        type: 'ADD_FILTER_STRING',
                        filterType: 'priceMin',
                        filterValue: value,
                      })
                    }
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                  <span>Até</span>
                  <CurencyInput
                    type="text"
                    value={filters.priceMax}
                    setValue={(value) => {
                      dispatch({
                        type: 'ADD_FILTER_STRING',
                        filterType: 'priceMax',
                        filterValue: value,
                      });
                    }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                </CurrencyArea>
              </InputGroup>

              <InputGroup>
                <label htmlFor="property-sub-type">Área (m²) </label>
                <CurrencyArea>
                  <CurencyInput
                    type="text"
                    value={filters.areaMin}
                    setValue={(value) =>
                      dispatch({
                        type: 'ADD_FILTER_STRING',
                        filterType: 'areaMin',
                        filterValue: value,
                      })
                    }
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                  <span>Até</span>
                  <CurencyInput
                    type="text"
                    value={filters.areaMax}
                    setValue={(value) => {
                      dispatch({
                        type: 'ADD_FILTER_STRING',
                        filterType: 'areaMax',
                        filterValue: value,
                      });
                    }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  />
                </CurrencyArea>
              </InputGroup>
              <RoomsArea>
                <h4>Dormitórios</h4>

                <ul>
                  {[...Array(5)].map((_, index) => (
                    <RoomOption>{index + 1}+</RoomOption>
                  ))}
                </ul>
              </RoomsArea>
            </FirstSection>
            <SecondSection></SecondSection>
          </GridColumn>
          <GridColumn>
            <h3 className="propertyDisplay">
              {properties[properties?.length - 1]?.totalCount} Imóveis
              encontrados
            </h3>
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
