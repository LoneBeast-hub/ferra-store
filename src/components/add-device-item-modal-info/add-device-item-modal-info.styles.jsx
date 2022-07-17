import styled from "styled-components";

export const DeviceItemsModalInfoContainer = styled.div`
    position: fixed;
    width: 90%;
    height: 95%;
    top: 2.5%;
    left: 5%;
    gap: 10px;
`;

export const FormsContainer = styled.div`
    display: flex;
    height: 400px;
    justify-content: center;
    width: 100%;
    border: 1px solid #efefef;
    gap: 10px;
    padding: 15px 0;
`;

export const CustomButtonsContainer = styled.div`
    width: 100%;
    margin-top: 20px;
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