import styled from "styled-components";

export const ItemsFilterContainer = styled.div`
    position: absolute;
    width: 220px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 120px;
    z-index: 5;

    @media screen and (max-width: 800px) {
        left: 12.5%;
    }

    @media screen and (max-width: 600px) {
        left: 7.5%;
    }

    @media screen and (max-width: 500px) {
        left: 0;
    }

    @media screen and (max-width: 400px) {
        left: 10%;
    }
`;