import React from 'react';
import { Container, Input } from './styles';

function NumberInput({
  value,
  setValue,
  onFocus,
  onBlur,
  onKeyDown,
  isCurrency,
  isArea,
}) {
  const handleOnChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D+/g, '');

    const formatedValueWithThousandDot = numericValue.replace(
      /\B(?=(\d{3})+\b)/g,
      '.'
    );
    if (inputValue.length < 11) setValue(formatedValueWithThousandDot);
  };

  return (
    <Container>
      {isCurrency && <span className="prevAsset">R$</span>}
      <Input
        isArea={isArea}
        value={value}
        onChange={handleOnChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      {isArea && <span className="afterAsset">m²</span>}
    </Container>
  );
}

export default NumberInput;
