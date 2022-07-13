import { CustomButton } from '../custom-button/custom-button.component.jsx';
import { connect } from 'react-redux/es/exports.js';
import { toggleItemModal } from '../../redux/item-modal/item-modal.actions';
import {
    ModalImageContainer, ModalImage, ModalWrapper,
    ModalSectionContainer, ModalCustomButtonContainer,
    ModalCustomButton, ModalDescriptionContainer,
    ModalPriceContainer, ModalNameContainer, ModalFooterContainer,
} from './device-info-modal.styles.jsx';

const DeviceInfoModal = ({ modalData, toggleItemModal }) => {
    const { imgUrl, name, description, price } = modalData;
    return(
        <ModalWrapper>
            <ModalImageContainer>
                <ModalImage src={imgUrl} />
            </ModalImageContainer>
            <ModalSectionContainer>
                <ModalNameContainer> {name} </ModalNameContainer>
                <ModalDescriptionContainer> {description} </ModalDescriptionContainer>
                <ModalFooterContainer>
                    <ModalPriceContainer> &#8358;{price} </ModalPriceContainer>
                    <ModalCustomButtonContainer>
                        <ModalCustomButton as={CustomButton}
                        bgColor='#f05435'
                        border= 'none'
                        color='#fff'
                        bgColorHover='#d13111'
                        onClick={() => {toggleItemModal(null)}}>CLOSE</ModalCustomButton>
                    </ModalCustomButtonContainer>
                </ModalFooterContainer>
            </ModalSectionContainer>
        </ModalWrapper>
    )
}

const mapDispatchToProps = (dispatch) => {
    return({
        toggleItemModal: (item) => {
            return(dispatch(toggleItemModal(item)))
        }
    })
}

export default connect(null, mapDispatchToProps)(DeviceInfoModal);