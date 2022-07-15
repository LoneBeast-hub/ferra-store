import styled from "styled-components";

export const DeviceModalItemContainer = styled.div`
    display: flex;
    width: 90%;
    margin-left: 5%;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 20px;
    border: 1px solid #efefef;
    padding-bottom: 15px;

    @media screen and (max-width: 500px) {
        flex-direction: column;
        width: 80%;
        margin-left: 10%;
    }

    @media screen and (max-width: 400px) {
        width: 90%;
        margin-left: 5%;
    }
    
    &:first-child {
        margin-top: 15px;
    }
`;

export const ImgContainer = styled.img`
    width: 30%;

    @media screen and (max-width: 500px) {
        width: 100%;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    width: 55%;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    gap: 5px;

    @media screen and (max-width: 500px) {
        width: 100%;
    }
`;

export const NameContainer = styled.span`
    font-size: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const DescriptionContainer = styled.p`
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const PriceContainer = styled.span`
    font-size: 13.5px;
`;

export const IconsContainer = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
    gap: 10px;
    justify-content: center;

    @media screen and (max-width: 500px) {
        flex-direction: row;
        width: 100%;
        justify-content: flex-start;
    }
`;