import styled from 'styled-components';

export const DeviceBarDropdownContainer = styled.div`
    position: absolute;
    width: 100px;
    height: 110px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 40px;
    right: 10px;
    z-index: 5;
    gap: 7px;
`;

export const CustomButtonContainer = styled.button`
    min-width: unset;
    height: unset;
    font-size: 10px;
    border-radius: 4px;
`;