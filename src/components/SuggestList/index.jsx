import React from 'react';

import { Container } from './styles';

function SuggestList({ filters, suggests, hide, handleSelectFilter, minimized }) {
  return (
    <Container hide={hide}>
      {suggests.length > 0 ? (
        <div>
          <div className="divider cities">
            <p className="title">
              Cidade
            </p>
            <ul className="list city-list">
              {suggests[0]?.cities?.map((item) => (
                <>
                  <li key={item.id} onClick={() => handleSelectFilter('cities', item.city)}>
                    {!minimized && (
                      <input
                        type="checkbox"
                        checked={filters.cities.includes(item.city)}
                         />
                    )}
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
              {suggests[0]?.districts?.map((item) => (
                <>
                  <li key={item.id} onClick={() => handleSelectFilter('districts', item.district)} >
                    {!minimized && (
                      <input
                        type="checkbox"
                        checked={filters.districts.includes(item.district)}
                      />
                    )}

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
              {suggests[0]?.streets?.map((item) => (
                <>
                  <li key={item.id} onClick={() => handleSelectFilter('streets', item.street)}>
                    {!minimized && (
                      <input
                        type="checkbox"
                        checked={filters.streets.includes(item.street)}
                      />
                    )}
                    <span>{item.street}, {item.district}, {item.city} - {item.state}</span>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="not-found">
          Não foram encontrados resultados
        </div>
      )}
    </Container>
  );
}

export default SuggestList;