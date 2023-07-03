import React, { useState } from 'react';

import { Container, DropdownContent, DropdownTrigger, ChevronDown } from './styles';

function Dropdown({ children, label, labelId, list, top, suggestsBg, onSelect }) {
  const [hide, setHide] = useState(true)

  return (
    <>
      <Container aria-label='dropdown' onClick={() => setHide(!hide)}>
        <DropdownTrigger>
          <button id={labelId} type="button">
            <div>
              <p>{label}</p>
              <ChevronDown rotateWhen={hide} />
            </div>
          </button>
        </DropdownTrigger>
        <DropdownContent hide={hide} position={top} bg={suggestsBg}>
          {list?.map((item, index) => (
            <li onClick={() => onSelect(item)} key={index}>{item}</li>
          ))}
          {children}
        </DropdownContent>
      </Container>
    </>
  );
}

export default Dropdown;