import { useState, useEffect } from 'react';

import Dropdown from '../../../components/Dropdown';
import NumberInput from '../../../components/CurrencyInput';
import SuggestList from '../../../components/SuggestList';

import PropertyApi from '../../../service/property';
import AddressApi from '../../../service/address';

import GoalData from '../../HomePage/Filters/OptionsData/goal-data';
import { IoClose } from 'react-icons/io5';

import {
  BathroomArea,
  Container,
  CurrencyArea,
  FilterGroup,
  FilterItem,
  FilterList,
  FirstSection,
  GaragesArea,
  GoalDivider,
  InputGroup,
  RoomOption,
  RoomsArea,
  SecondSection,
  SuitesArea,
} from './styles';

function FiltersColumn({ dispatch, filters, setIsFocused }) {
  const [localeInput, setLocaleInput] = useState('');
  const [suggests, setSuggests] = useState([]);
  const [propertyList, setPropertyList] = useState([]);
  const [hideSuggest, setHideSuggest] = useState(true);
  const [propertyTextInput, setpropertyTextInput] = useState('Casa');

  const handleLocaleInputChange = (event) => {
    setLocaleInput(event.target.value);

    if (suggests.length > 0 || localeInput.length > 1) {
      setHideSuggest(false);
    }
  };

  const handleSelectFilter = (filterType, filterValue) => {
    if (valueNotInFilter(filterType, filterValue)) {
      dispatch({ type: 'ADD_FILTER', filterType, filterValue });
    }
    setHideSuggest(true);
  };

  function valueNotInFilter(filterType, filterValue) {
    return !filters[filterType].includes(filterValue);
  }

  const removeFilter = (filterType, filterValue) => {
    dispatch({ type: 'REMOVE_FILTER', filterType, filterValue });
  };

  const handlePressEnterToFilter = (event) => {
    if (event.key === 'Enter') {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
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
      <FirstSection>
        <h4 className="subtitle">Geral</h4>

        <GoalDivider>
          <InputGroup>
            <label htmlFor="finalidade">O que você deseja?</label>
            <Dropdown label={filters.goal} labelId={'finalidade'} top={'55px'}>
              {GoalData.map((options) => (
                <li
                  key={options.value}
                  onClick={() =>
                    dispatch({
                      type: 'ADD_UNIQUE_FILTER',
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
            placeholder="Cidades, bairros, ruas"
            onChange={handleLocaleInputChange}
            onFocus={() => localeInput.length > 2 && setHideSuggest(false)}
            onBlur={() => setHideSuggest(true)}
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
                        type: 'ADD_UNIQUE_FILTER',
                        filterType: 'propertyType',
                        filterValue: property.id,
                      });
                      dispatch({
                        type: 'ADD_UNIQUE_FILTER',
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
          <label>Faixa de Imóvel (R$) </label>
          <CurrencyArea>
            <NumberInput
              type="text"
              value={filters.priceMin}
              isCurrency={true}
              setValue={(value) =>
                dispatch({
                  type: 'ADD_UNIQUE_FILTER',
                  filterType: 'priceMin',
                  filterValue: value,
                })
              }
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={handlePressEnterToFilter}
            />
            <span>Até</span>
            <NumberInput
              type="text"
              value={filters.priceMax}
              isCurrency={true}
              setValue={(value) => {
                dispatch({
                  type: 'ADD_UNIQUE_FILTER',
                  filterType: 'priceMax',
                  filterValue: value,
                });
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={handlePressEnterToFilter}
            />
          </CurrencyArea>
        </InputGroup>

        <InputGroup>
          <label>Área (m²) </label>
          <CurrencyArea>
            <NumberInput
              type="text"
              isArea={true}
              value={filters.areaMin}
              setValue={(value) =>
                dispatch({
                  type: 'ADD_UNIQUE_FILTER',
                  filterType: 'areaMin',
                  filterValue: value,
                })
              }
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={handlePressEnterToFilter}
            />
            <span>Até</span>
            <NumberInput
              type="text"
              value={filters.areaMax}
              isArea={true}
              setValue={(value) => {
                dispatch({
                  type: 'ADD_UNIQUE_FILTER',
                  filterType: 'areaMax',
                  filterValue: value,
                });
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={handlePressEnterToFilter}
            />
          </CurrencyArea>
        </InputGroup>
        <RoomsArea>
          <h4>Dormitórios</h4>

          <ul>
            {[...Array(5)].map((_, index) => (
              <RoomOption
                isSelected={filters.rooms === index + 1}
                onClick={() =>
                  dispatch({
                    type: 'ADD_UNIQUE_FILTER',
                    filterType: 'rooms',
                    filterValue: index + 1,
                  })
                }
              >
                {index + 1}+
              </RoomOption>
            ))}
          </ul>
        </RoomsArea>
      </FirstSection>
      <SecondSection>
        <GaragesArea>
          <h4>Vagas na Garagem</h4>

          <ul>
            {[...Array(4)].map((_, index) => (
              <RoomOption
                isSelected={filters.garageVacancy === index + 1}
                onClick={() =>
                  dispatch({
                    type: 'ADD_UNIQUE_FILTER',
                    filterType: 'garageVacancy',
                    filterValue: index + 1,
                  })
                }
              >
                {index + 1}+
              </RoomOption>
            ))}
          </ul>
        </GaragesArea>
        <SuitesArea>
          <h4>Número de Suítes</h4>

          <ul>
            {[...Array(5)].map((_, index) => (
              <RoomOption
                isSelected={filters.suites === index + 1}
                onClick={() =>
                  dispatch({
                    type: 'ADD_UNIQUE_FILTER',
                    filterType: 'suites',
                    filterValue: index + 1,
                  })
                }
              >
                {index + 1}+
              </RoomOption>
            ))}
          </ul>
        </SuitesArea>
        <BathroomArea>
          <h4>Número de Banheiros</h4>

          <ul>
            {[...Array(5)].map((_, index) => (
              <RoomOption
                isSelected={filters.bathrooms === index + 1}
                onClick={() =>
                  dispatch({
                    type: 'ADD_UNIQUE_FILTER',
                    filterType: 'bathrooms',
                    filterValue: index + 1,
                  })
                }
              >
                {index + 1}+
              </RoomOption>
            ))}
          </ul>
        </BathroomArea>
      </SecondSection>
    </Container>
  );
}

export default FiltersColumn;
