import styled from "styled-components";

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