import styled from "styled-components";

export const TitleContainer = styled.p`
    font-size: 18px;
    text-align: center;
`;

export const FormContainer = styled.form`
    border: 1px solid #efefef;
    padding: 10px 0;
    width: 47%;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    @media screen and (max-width: 500px) {
        width: 90%;
    }
`;

export const InputFieldWrapper = styled.div`
    width: 80%;
    display: flex;
    margin-left: 10%;
    flex-direction: column;
    margin-bottom: 15px;
`;

export const LabelContainer = styled.label`
    font-size: 13px;
`;

export const InputContainer = styled.input`
    border: 1px solid #808080;
    border-radius: 5px;
`;

export const UploadButton = styled.input`
    display: none;
`;

export const UploadImgLabel = styled.label`
    padding: 5px;
    background: #4854d4;
    display: flex;
    font-size: 13px;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 7px;
`;

export const FileInputsWrapper = styled.div`
    margin-top: 7px;
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;
`;

export const UndoButton = styled.button`
    border-radius: 10px;
    font-size: 10px;
`;