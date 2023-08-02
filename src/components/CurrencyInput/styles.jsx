import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  .prevAsset {
    font-size: 12px;
    margin-right: -25px;
    padding-left:10px;
    color: rgba(3, 3, 3, 0.47);
    z-index: 99;
  }

  .afterAsset {
    font-size: 12px;
    color: rgba(3, 3, 3, 0.47);
    margin-left: -25px;
    z-index: 99;
  }
`;

export const Input = styled.input`
  color: rgba(0, 0, 0, 0.645);
  font-size: 13px;
  margin-top: 8px;
  height: 42px;
  width: 100%;
  padding: 2px 10px 0;
  border: 1px solid #cfd4dd;
  outline: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  direction: rtl;
  ${({ isArea }) =>
    isArea &&
    `
  padding-right:30px;`}
`;
