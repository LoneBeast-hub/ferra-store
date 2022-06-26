import styled from 'styled-components';
import { DeviceItemContainer } from '../../components/device-item/device-item.styles';

export const DevicePageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const TitleContainer = styled.h1`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const ItemsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    & ${DeviceItemContainer} {
        margin-bottom: 30px;
    }

    @media screen and (max-width: 800px) {
        display: grid;
        grid-gap: 15px;
    }
`;