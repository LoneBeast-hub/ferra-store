import styled, { css } from 'styled-components';

const buttonStyles = css`
    padding: 7px !important;
    background-color: ${({bgColor}) => {
        return(bgColor);
    }};
    color: ${({color}) => {
        return(color);
    }};
    border: ${({border}) => {
        return(border);
    }};

    &:hover {
        background-color: ${({bgColorHover}) => {
            return(bgColorHover);
        }};
        color: ${({colorHover}) => {
            return(colorHover);
        }};
        border: ${({borderHover}) => {
            return(borderHover);
        }};
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;
    border: none;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

// function
const getButtonStyles = (props) => {
    if(props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    return(props.inverted? invertedButtonStyles : buttonStyles);
}


export const CustomButtonContainer = styled.button`
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    cursor: pointer;
    ${getButtonStyles}
`;