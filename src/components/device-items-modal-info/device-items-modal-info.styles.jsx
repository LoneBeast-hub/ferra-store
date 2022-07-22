import styled from "styled-components";

export const DeviceItemsModalInfoContainer = styled.div`
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

export const Filter = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin-top: -10px;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    padding: 5px 0;
`;

export const CustomButtonContainer = styled.button`
    width: 40px;
    height: unset;
    font-size: 10px;
    border-radius: 4px;
`;

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 370px;
    overflow-y: scroll;
    border: 1px solid #efefef;
`;

export const EmptyContainer = styled.div`
    margin-top: 40px;
    text-align: center;
`;

export const ModalCustomButtonContainer = styled.div`
    width: 100%;
    clear: both;
`;

export const IconWrap = styled.div`
    padding: 5px;
    float: left;
    width: 30px;
    height: 30px;
    background: #9fb4bf;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
`;

export const AddIcon = styled.span`
    text-align: center;
    font-size: 15px;
`;

export const ModalCustomButton = styled.button`
    float: right;
    padding: 10px !important;
    font-size: 10px;
    border-radius: 10px;
`;