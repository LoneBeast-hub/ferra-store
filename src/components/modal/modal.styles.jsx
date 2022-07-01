import styled from "styled-components";

export const ModalScreen = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 6;
`;

export const ModalContainer = styled.div`
    position:fixed;
    background: white;
    width: 80%;
    height: 500px;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
`;