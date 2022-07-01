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

export const FilterIconContainer = styled.div`
    width: 30px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #808080;
`;

export const FilterIcon = styled.span`
    color: #fff;
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
        padding-bottom: 20px;
    }
`;

export const ModalImageContainer = styled.div`
    width: 48%;
    height: 100%;
    margin-bottom: 5px;

    @media screen and (max-width: 500px) {
        width: 90%;
        height: 250px;
        margin: auto;
    }

    @media screen and (max-width: 320px) {
        width: 98%;
        height: 100%;
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
    max-height: 75%;
    height: auto;
    overflow: hidden;
    margin: auto;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 500px) {
        width: 95%;
        margin: auto;
        max-height: 75%;
    }
`;

export const ModalNameContainer = styled.div`
    width: 95%;
    font-weight: 700;
    font-size: 18px;
    padding: 0 10px 0 0;
    margin-bottom: 10px;
    max-height: 50px;
    height: auto;
    overflow-y: scroll;

    @media screen and (max-width: 800px) {
        height: 30px;
    }

    @media screen and (max-width: 700px) {
        height: 40px;
    }

    @media screen and (max-width: 500px) {
        max-height: 50px;
        height: auto;
    }
`;

export const ModalDescriptionContainer = styled.div`
    width: 95%;
    height: 50%;
    margin: auto;
    padding: 0 10px;
    overflow-y: scroll;
    text-align: justify;

    @media screen and (max-width: 500px) {
        max-height: 100px;
    }
`;

export const ModalFooterContainer = styled.div`
    margin-top: 20px;
    width: 95%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    flex-direction: row;
`;

export const ModalPriceContainer = styled.span`
    width: 50%;
    font-size: 15px;
    font-weight: 600;
    color: green;
`;

export const ModalCustomButtonContainer = styled.div`
    width: 50%;
`;

export const ModalCustomButton = styled.button`
    float: right;
    padding: 10px !important;
    font-size: 10px;
    border-radius: 10px;
`;