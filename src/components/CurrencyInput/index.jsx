import React from 'react';
import { Input } from './styles';

function CurencyInput({ value, setValue, onFocus, onBlur }) {
  const handleOnChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D+/g, '');

    const formatedValueWithThousandDot = numericValue.replace(/\B(?=(\d{3})+\b)/g, '.');

    setValue(formatedValueWithThousandDot);
  };

  return (
    <Input
      value={value}
      onChange={handleOnChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

export default CurencyInput;
