import styled from "styled-components";
import { IoChevronDownOutline } from 'react-icons/io5';

export const Container = styled.div`
    position:relative;
    width:100%;
    min-height:46px;
    padding:0 10px;
    font-size:15px;
    background-color:#fff;
    border:1px solid #cfd4dd;
    border-radius:5px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    cursor:pointer;

  &:focus{
    outline:2px solid #1f9b4c88;
  }
`;

export const DropdownTrigger = styled.div`
  width:100%;
  button{
    width:100%;
    height:100%;
    
    div{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:5px;
      width:100%;

      p{
        max-width:200px;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
        font-weight:400;
        color:#5e6a82;
      }

      
    }
  }
`;

export const DropdownContent = styled.ul`
  background-color:red;
  padding: 15px 10px;
  width: 100%;
  max-height: 300px;
  background-color: white;
  position:absolute;
  top:${({ position }) => `${position}`};
  overflow: auto;
  border: 1px solid #cfd4dd;
  border-radius: 5px;
  transition: all .2s ease-in-out;
  color: #3c4453;
  z-index:${({ hide }) => hide ? '-1' : '999'};
  opacity: ${({ hide }) => hide ? '0' : '1'};

  li{
    cursor: pointer;
    padding: 10px;
    display: flex;
    gap: 10px;
    font-size:16px;

    &:hover{
      background-color: #1f9b4c88;
    }
  }
`;

export const ChevronDown = styled(IoChevronDownOutline)`
  font-size:20px;
  opacity:1;
  transition: transform .2s ease;
  transform:${({ rotateWhen }) => rotateWhen ? 'rotate(0)' : 'rotate(-180deg)'};
`;