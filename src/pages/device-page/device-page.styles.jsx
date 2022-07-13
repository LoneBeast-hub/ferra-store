import styled from 'styled-components';
import { DeviceItemContainer } from '../../components/device-item/device-item.styles';
import { ModalContainer } from '../../components/modal/modal.styles';


export const DevicePageContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    ${ModalContainer} {
        @media screen and (max-width: 900px) {
            height: 400px;
        }

        @media screen and (max-width: 800px) {
            height: 350px;
        }

        @media screen and (max-width: 500px) {
            max-height: 500px;
            height: auto;
        }
    }
`;

export const TitleContainer = styled.h1`
    font-size: 38px;
    margin: 0 auto;
`;

export const Filters = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 5px 0;
    margin: 20px auto;

    @media screen and (max-width: 800px) {
        width: 75%;
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

export const ItemsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    & ${DeviceItemContainer} {
        margin-bottom: 30px;
    }

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

export const EmptyContainer = styled.div`
    grid-column: auto / span 4;
    text-align: center;
`;