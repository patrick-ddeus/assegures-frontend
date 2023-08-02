/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useReducer, useMemo } from 'react';

import Header from '../../components/Header';

import PropertyApi from '../../service/property';
import { Container, Banner, GridColumn, GridContainer } from './styles';

import { useSearchParams, useParams } from 'react-router-dom';
import FiltersColumn from './FiltersColumn';

const MIN_PRICE_FILTER = '250.000';
const MAX_PRICE_FILTER = '1.500.000';
const MIN_AREA_FILTER = '';
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
    case 'ADD_UNIQUE_FILTER':
      return { ...state, [action.filterType]: action.filterValue };
    default:
      return state;
  }
};

function PropertiesPage() {
  const { finalidade } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

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
    rooms: 1,
    garageVacancy: 1,
    suites: 1,
    bathrooms: 1,
  });

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isFocused) {
      console.log('tA CHAMANDO');
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

  return (
    <Container>
      <Header />
      <Banner />
      <main>
        <GridContainer>
          <FiltersColumn
            dispatch={dispatch}
            filters={filters}
            setIsFocused={setIsFocused}
          />
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
