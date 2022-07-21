import styled, { css } from "styled-components";

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

const disabledStyles = css`
    background: #b0b0b1 !important;
`;

const includeDisabled = ({disabled}) => {
    if(disabled === false) {
        return ;
    }
    return disabledStyles
}

export const UploadButton = styled.input`
    margin-top: 7px;
`;

export const UploadImgBtn = styled.button`
    padding: 5px;
    border: none;
    background: #4854d4;
    display: flex;
    font-size: 13px;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 7px;
    ${includeDisabled}
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
    ${includeDisabled}
    font-size: 10px;
`;