import React, { useState, useRef, useEffect } from 'react';

import {
  Container,
  DropdownContent,
  DropdownTrigger,
  ChevronDown,
} from './styles';

function Dropdown({
  children,
  label,
  labelId,
  list,
  top,
  suggestsBg,
  onSelect,
  p,
  m
}) {
  const [hide, setHide] = useState(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHide(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Container
        p={p}
        m={m}
        aria-label="dropdown"
        onClick={() => setHide(!hide)}
        ref={dropdownRef}
      >
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
            <li onClick={() => onSelect(item)} key={index}>
              {item}
            </li>
          ))}
          {children}
        </DropdownContent>
      </Container>
    </>
  );
}

export default Dropdown;
