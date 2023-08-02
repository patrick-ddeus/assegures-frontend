/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useReducer, useMemo } from "react";
import Header from "../../components/Header";

import PropertyApi from "../../service/property";
import {
  Container,
  Banner,
  GridColumn,
  GridContainer,
  Property,
  Properties,
  PropertyImage,
  PropertyDescription,
  DetailsButton,
  ContactArea,
} from "./styles";

import { useSearchParams, useParams } from "react-router-dom";
import FiltersColumn from "./FiltersColumn";

const MIN_PRICE_FILTER = "250.000";
const MAX_PRICE_FILTER = "1.500.000";
const MIN_AREA_FILTER = "";
const MAX_AREA_FILTER = "8.200";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FILTER":
      return {
        ...state,
        [action.filterType]: [...state[action.filterType], action.filterValue],
      };
    case "REMOVE_FILTER":
      return {
        ...state,
        [action.filterType]: state[action.filterType].filter(
          (value) => value !== action.filterValue
        ),
      };
    case "ADD_UNIQUE_FILTER":
      return { ...state, [action.filterType]: action.filterValue };
    default:
      return state;
  }
};

function PropertiesPage() {
  const { finalidade } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [isFocused, setIsFocused] = useState(false);
  const [totalImovel, setTotalImovel] = useState();

  const cities = searchParams
    .get("cities")
    ?.split(",")
    .filter(removeEmptyValues);
  const districts = searchParams
    .get("districts")
    ?.split(",")
    .filter(removeEmptyValues);
  const streets = searchParams
    .get("streets")
    ?.split(",")
    .filter(removeEmptyValues);

  function removeEmptyValues(value) {
    return value !== "";
  }

  const propertyType = searchParams.get("propertyType");
  const propertySubType = searchParams.get("propertySubType");

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
      console.log("tA CHAMANDO");
      const queryParams = new URLSearchParams(nonEmptyFilters);
      setSearchParams(queryParams);

      const fetchProperties = async () => {
        try {
          const properties = await PropertyApi.getPropertiesByFilterObject(
            filters
          );
          console.log(properties);
          setProperties(properties.slice(0, -1));
          setTotalImovel(properties[properties?.length - 1]?.totalCount);
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
    return value !== "" && value.length !== 0;
  }

  function shouldExcludeAreaAndPriceFilters(filterName) {
    return (
      filterName !== "areaMin" &&
      filterName !== "areaMax" &&
      filterName !== "priceMin" &&
      filterName !== "priceMax"
    );
  }

  function formatNumber(number) {
    const options = {
      style: "currency",
      currency: "BRL",
    };

    const formattedNumber = new Intl.NumberFormat("pt-BR", options).format(
      number
    );
    return formattedNumber;
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
              {totalImovel} Imóveis encontrados
            </h3>
            <Properties>
              {properties?.map((property) => (
                <Property>
                  <PropertyImage>
                    <img src="http://loremflickr.com/640/480" alt="" />
                  </PropertyImage>
                  <PropertyDescription>
                    <p>{property.short_description}</p>
                    <p>
                      <span>{property.number_of_rooms} Dorms</span>
                      <span>{property.number_of_bathrooms} Banheiros</span>
                      <span>{property.suites} Suítes</span>
                      <span>{property.number_of_garages} Vagas</span>
                    </p>
                    <p>02/09/2023</p>
                    <p>{formatNumber(property.price)}</p>
                  </PropertyDescription>
                  <ContactArea>
                    <DetailsButton>Contact</DetailsButton>
                  </ContactArea>
                </Property>
              ))}
            </Properties>
          </GridColumn>
        </GridContainer>
      </main>
    </Container>
  );
}

export default PropertiesPage;
