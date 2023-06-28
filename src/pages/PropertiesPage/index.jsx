import React, { useEffect, useState, useReducer } from 'react';
import Header from "../../components/Header";

import PropertyApi from '../../service/property';

import { IoClose } from 'react-icons/io5';

import {
    Container,
    Banner,
    GridColumn,
    GridContainer,
    FirstSection,
    InputGroup,
    FilterList,
    FilterItem
} from './styles';

import { useSearchParams, useParams } from 'react-router-dom';

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

function PropertiesPage() {
    const { tipo } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    
    const cities = searchParams.get('cities')?.split(',');
    const districts = searchParams.get('districts')?.split(',');
    const streets = searchParams.get('streets')?.split(',');

    const [filters, dispatch] = useReducer(reducer, {
        cities: cities || [],
        districts: districts || [],
        streets: streets || [],
        goal: tipo
    });

    const [properties, setProperties] = useState([])

    const handleToggleFilter = (filterType, filterValue) => {
        const actionType = filters[filterType].includes(filterValue) ? 'REMOVE_FILTER' : 'ADD_FILTER';
        dispatch({ type: actionType, filterType, filterValue });
    };

    const removeFilter = (filterType, filterValue) => {
        dispatch({ type: 'REMOVE_FILTER', filterType, filterValue });
        const queryParams = new URLSearchParams(filters);
        setSearchParams(queryParams)
    }

    useEffect(() => {
        const queryParams = new URLSearchParams(filters);
        setSearchParams(queryParams)
        const fetchProperties = async () => {
            try {
                const properties = await PropertyApi.getPropertiesWithFilter(queryParams)
                setProperties(properties)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchProperties()
    }, [filters])

    return (
        <Container >
            <Header />
            <Banner />
            <main>
                <h3>Imóveis | Foram encontrados {properties[properties?.length - 1]?.totalCount} Imóveis</h3>
                <GridContainer>
                    <GridColumn>
                        <FirstSection>
                            <h4>Geral</h4>
                            <InputGroup>
                                <label htmlFor='locale'>Localização do Imóvel</label>
                                <input type="text" id='locale' placeholder='cidades, bairros, ruas' />
                            </InputGroup>
                            <FilterList>
                                {filters.cities[0] !== "" && filters.cities.map(city => (
                                    <FilterItem onClick={() => removeFilter('cities', city)} key={city}>
                                        {city}
                                        <IoClose />
                                    </FilterItem>
                                ))}

                            </FilterList>
                        </FirstSection>
                    </GridColumn>
                    <GridColumn>
                        <ul>
                            {properties?.map(property => (
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