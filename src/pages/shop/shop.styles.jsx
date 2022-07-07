import styled from "styled-components";

export const ShopPageContainer = styled.div`
    @media screen and (max-width: 800px) {
        width: 75%;
        margin: auto;
        display: grid;
        grid-gap: 15px;
    }

    @media screen and (max-width: 600px) {
        width: 85%;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
    }

    @media screen and (max-width: 400px) {
        width: 80%;
    }
`;
