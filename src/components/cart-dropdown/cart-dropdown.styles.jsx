import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 220px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`;

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
`;

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

export const CustomButtonContainer = styled.button`
    margin-top: auto;

    @media screen and (max-width: 500px) {
        font-size: 11px;
    }
`;