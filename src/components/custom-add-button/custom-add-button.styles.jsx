import styled from "styled-components";

export const CustomAddButtonContainer = styled.div`
    min-width: 45.5%;
    background-color: #e9f1f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #9fb4bf;
    margin: 0 7.5px 15px;
    overflow: hidden;
    height: 240px;

    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 800px) {
        height: 200px;
    }
`;

export const IconWrap = styled.div`
    padding: 5px;
    width: 70px;
    height: 70px;
    background: #9fb4bf;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
`;

export const AddIcon = styled.span`
    text-align: center;
    font-size: 40px;
`;