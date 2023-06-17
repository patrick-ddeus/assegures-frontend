import styled from 'styled-components';

export const Select = styled.select`
    width:120px;
    height:40px;
    padding:0 15px;
    font-size:15px;
    font-family:"Poppins", sans-serif;
`;

export const Container = styled.div`
    display:flex;
    justify-content:space-between;

    .select-group{
        display:flex;
        gap:10px;
    }
`;