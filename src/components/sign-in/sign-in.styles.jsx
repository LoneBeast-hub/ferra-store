import styled from 'styled-components';
import { CustomButtonContainer } from '../custom-button/custom-button.styles';

export const SignInContainer = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    margin: auto;
`;

export const TitleContainer = styled.h2`
    margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    @media screen and (max-width: 500px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;

        ${CustomButtonContainer} {
            grid-column: auto / span 2;
        }
    }
`;