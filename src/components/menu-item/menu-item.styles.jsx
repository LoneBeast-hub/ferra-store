import styled from 'styled-components';

export const BgImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => {
        return `url(${imageUrl})`
    }};
`;

export const ContentContainer = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: #fff;
    position: absolute;
    opacity: 0.7;

    @media screen and (max-width: 500px) {
        width: 60%;
    }
`;

export const TitleContainer = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
    text-align: center;

    @media screen and (max-width: 500px) {
        font-size: 18px;
    }

    @media screen and (max-width: 400px) {
        font-size: 15px;
    }
`;

export const SubtitleContainer = styled.span`
    font-weight: lighter;
    font-size: 16px;
    text-align: center;

    @media screen and (max-width: 500px) {
        font-size: 12px;
    }

    @media screen and (max-width: 400px) {
        font-size: 10px;
    }
`;

export const MenuItemContainer = styled.div`
    min-width: 30%;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;
    height: ${({ size }) => {
        return size? '380px': '240px';
    }};

    &.large {
        height: 380px;
    }

    &:first-child {
        margin-right: 7.5px;
    }
  
    &:last-child {
        margin-left: 7.5px;
    }

    &:hover {
        cursor: pointer;
    }

    &:hover > ${BgImageContainer} {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    &:hover > ${ContentContainer} {
        opacity: 0.9;
    }

    @media screen and (max-width: 800px) {
        height: 200px;
    }
`;