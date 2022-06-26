import styled from "styled-components";
import { Link } from 'react-router-dom';

// header container
export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 10px;
    }
`;

// Logo container
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0px;
    }
`;

// Options container
export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 80%;
        font-size: 13px;
    }
`;

// Option Link
export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;