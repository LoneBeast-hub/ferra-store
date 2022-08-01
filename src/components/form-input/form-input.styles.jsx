import styled, { css } from 'styled-components';

const getInputType = (otherProps) => {
    if(otherProps.type === 'password') {
        return 'letter-spacing: 0.3em;'
    };

    return '';
}

const shrinkLabel = css`
    top: -14px;
    font-size: 12px;
    color: black;
`;

const expandLabel = css`
    top: 10px;
    font-size: 16px;
    color: grey;
`;

const toggleShrink = (otherProps) => {
    if(otherProps.value.length){
        return shrinkLabel;
    };
    return expandLabel;
}

export const GroupContainer = styled.div`
    position: relative;
    margin: 45px 0;
`;

export const LabelContainer = styled.label`
    ${toggleShrink}
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    transition: 300ms ease all;
`;

export const FormInputContainer = styled.input`
    background: none;
    background-color: white;
    color: grey;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;
    margin: 25px 0;
    ${getInputType};

    &:focus {
      outline: none;
    }

    &:focus ~ ${LabelContainer} {
      ${shrinkLabel}
    }
`;

