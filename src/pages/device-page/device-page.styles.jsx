import styled from 'styled-components';
import { DeviceItemContainer } from '../../components/device-item/device-item.styles';

export const DevicePageContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const TitleContainer = styled.h1`
    font-size: 38px;
    margin: 0 auto 30px;
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
        display: grid;
        grid-gap: 15px;
    }
`;

// Device item modal
export const ModalWrapper = styled.div`
    width: 95%;
    height: 95%;
    display: flex;
    margin: auto;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

export const ModalImageContainer = styled.div`
    width: 48%;
    height: 100%;
    margin-bottom: 5px;

    @media screen and (max-width: 500px) {
        width: 98%;
    }
`;

export const ModalImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    display: block;
    margin: auto;
    margin-top: 1%;
`;

export const ModalSectionContainer = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 500px) {
        width: 98%;
    }
`;

export const ModalNameContainer = styled.div`
    width: 95%;
    font-weight: 700;
    font-size: 18px;
    padding: 0 10px 0 0;
`;

export const ModalDescriptionContainer = styled.div`
    width: 95%;
    height: 75%;
    margin: auto;
    padding: 0 10px;
    overflow-y: scroll;
    text-align: justify;
`;

export const ModalFooterContainer = styled.div`
    width: 95%;
    height: 25%;
    display: flex;
    /* align-items: flex-start; */
    justify-content: space-between;
    font-size: 18px;
    flex-direction: row;
`;

export const ModalPriceContainer = styled.span`
    /* width: 50%; */
    font-size: 13px;
    font-weight: 600;
    color: green;
`;

export const ModalCustomButtonContainer = styled.button`
    /* width: 50%; */
    height: unset;
    font-size: 10px;
    border-radius: 10px;
`;