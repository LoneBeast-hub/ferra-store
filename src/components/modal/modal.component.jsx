import { ModalScreen, ModalContainer } from "./modal.styles";

export const Modal = ({ children }) => {
    return(
        <ModalScreen>
            <ModalContainer>
                { children }
            </ModalContainer>
        </ModalScreen>
    );
}