import styled from "styled-components";

export const AddDeviceModalInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 90%;
    height: 95%;
    top: 2.5%;
    left: 5%;
    gap: 10px;
`;

export const TitleContainer = styled.p`
    font-size: 18px;
    text-align: center;
`;

export const FormsContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-y: scroll;
    height: 370px;
    justify-content: center;
    width: 100%;
    border: 1px solid #efefef;
    gap: 10px;
    padding: 15px 0;

    @media screen and (max-width: 500px) {
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
    }
`;

export const TrackButton = styled.input`
    border: none;
    background: #15631a;
    color: #fff;
    padding: 5px;
    width: fit-content;
    font-size: 12px;
    border-radius: 5px;
    font-family: 'Barlow Condensed', sans-serif;
    margin-left: 10%;
`;

export const CustomButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-end;
`;

export const ModalCustomButton = styled.button`
    padding: 10px !important;
    font-size: 10px;
    border-radius: 10px;
`;