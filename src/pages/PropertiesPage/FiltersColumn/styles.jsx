import { styled } from 'styled-components';

export const Container = styled.div``;

export const FirstSection = styled.section`
  padding: 20px;
  background-color: #68d391;
  border: 1px solid #00a896;
  border-radius: 7px;
`;

export const SecondSection = styled.section`
  padding: 20px;
  background-color: white;
  border: 1px solid rgba(226, 228, 232, 0.8);
  border-radius: 7px;
  margin-top: 20px;
`;

export const GoalDivider = styled.div`
  position: relative;
  width: 100%;
`;

export const InputGroup = styled.div`
  position: relative;
  margin-top: 20px;

  label {
    font-size: 15px;
    font-weight: 500;
    color: rgb(60, 72, 88);
    margin-bottom: 5px;
  }

  .localeInput {
    margin-top: 8px;
    height: 42px;
    width: 100%;
    padding: 0 15px;
    border: 1px solid #cfd4dd;
    outline: 0;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    font-size: 14px;
  }
`;

export const SuggestList = styled.div`
  margin-top: 10px;
  padding: 40px 10px 20px;
  width: 100%;
  max-height: 300px;
  background-color: white;
  overflow: auto;
  z-index: ${({ hide }) => (hide ? '-1' : '999')};
  opacity: ${({ hide }) => (hide ? '0' : '1')};
  border: 1px solid #cfd4dd;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  color: #3c4453;

  &::-webkit-scrollbar {
    display: none;
  }

  div {
    font-size: 16px;
  }

  .divider {
    padding: 15px;

    .title {
      margin-bottom: 10px;
      font-size: 16px;
      font-weight: 500;
    }

    .list li {
      cursor: pointer;
      padding: 10px;
      display: flex;
      gap: 10px;

      &:hover {
        background-color: #1f9b4c88;
      }

      input[type='checkbox'] {
        min-width: 20px;
        min-height: 20px;
      }
    }
  }

  .not-found {
    padding-bottom: 20px;
  }
`;

export const FilterGroup = styled.div`
  p {
    margin-top: 10px;
  }
`;

export const FilterList = styled.ul`
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
  gap: 5px;
`;

export const FilterItem = styled.li`
  border: 1px solid rgb(60, 72, 88);
  border-radius: 20px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: rgb(60, 72, 88);
  font-weight: 500;

  svg {
    font-size: 15px;
    transition: all 0.2s ease;
    min-width: 15px;
  }

  &:hover {
    svg {
      background-color: white;
      color: #46cf46;
      border-radius: 20px;
    }
  }
`;

export const CurrencyArea = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  span {
    margin-top: 10px;
    color: rgb(60, 72, 88);
    font-size: 14px;
  }
`;

export const RoomsArea = styled.section`
  margin-top: 20px;
  h4 {
    font-size: 15px;
    font-weight: 500;
    color: rgb(60, 72, 88);
    margin-bottom: 15px;
    margin-top: 10px;
  }

  ul {
    display: flex;
    gap: 10px;
  }
`;

export const SuitesArea = styled(RoomsArea)`
  margin-bottom: 0;
`;

export const GaragesArea = styled(RoomsArea)`
  margin-bottom: 0;
`;

export const BathroomArea = styled(RoomsArea)`
  margin-bottom: 0;
`;

export const RoomOption = styled.li`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: rgb(60, 72, 88);
  border: 1px solid rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: background 0.5s ease;

  ${({ isSelected }) =>
    isSelected &&
    `
    border:2px solid rgb(60, 72, 88);
  `}

  &:hover {
    background-color: rgb(60, 72, 88);
    color: white;
  }
`;
