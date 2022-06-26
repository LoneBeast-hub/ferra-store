import styled from 'styled-components';

export const ImageContainer = styled.div`
    width: 99%;
    height: 65%;
    margin-bottom: 5px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    display: block;
    margin: auto;
    margin-top: 1%;
`

export const DeviceSectionContainer = styled.div`
    display: flex;
    width: 95%;
    height: 20%;
    overflow: hidden;
    flex-direction: column;
`;

export const DescriptionContainer = styled.span`
    width: 95%;
    margin: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: justify;
`;

export const DeviceFooterContainer = styled.div`
    width: 95%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    flex-direction: row;
`;

export const CustomButtonContainer = styled.button`
    min-width: unset;
    height: unset;
    font-size: 10px;
    border-radius: 10px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
`;

export const NameContainer = styled.span`
    width: 90%;
    font-weight: 700;
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const PriceContainer = styled.span`
    width: 10%;
    font-size: 13px;
    font-weight: 600;
    color: green;
`;

export const DeviceItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    overflow: hidden;
    align-items: center;
    position: relative;
    border-radius: 20px;
    box-shadow: 0 0 5px #808080;
    padding-bottom: 10px;

    @media screen and (max-width: 800px) {
        width: 100%;
        grid-column: auto / span 2;
    }
    @media screen and (max-width: 400px) {
        grid-column: auto / span 4;
    }
`;