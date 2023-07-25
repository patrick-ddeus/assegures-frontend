import React from 'react';

// import { Container } from './styles';

function FiltersColumn({ dispatch}) {
  return (
    <>
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
          <input type="text" />
        </InputGroup>
      </FirstSection>
      <SecondSection></SecondSection>
    </>
  );
}

export default FiltersColumn;
