import { connect } from 'react-redux';
import { selectDevice } from '../../redux/directory/directory.selectors';
import DeviceItem from '../../components/device-item/device-item.component';
// styled components
import { 
            DevicePageContainer, 
            TitleContainer, 
            ItemsContainer,
            ModalImageContainer,
            ModalImage,
            ModalWrapper,
            ModalSectionContainer,
            ModalCustomButtonContainer,
            ModalDescriptionContainer,
            ModalPriceContainer,
            ModalNameContainer,
            ModalFooterContainer
        } from './device-page.styles';
// components
import { Modal } from '../../components/modal/modal.component';
import { CustomButton } from '../../components/custom-button/custom-button.component';
// redux related
import { toggleItemModal } from '../../redux/item-modal/item-modal.actions';

const DevicePage = ({ device, modalVisibility, modalData, toggleItemModal }) => {
    const { title, items } = device;
    
    return(
        <DevicePageContainer>
            <TitleContainer> {title} </TitleContainer>
            <ItemsContainer>
                {items.map((item) => {
                    return(<DeviceItem key={item.id} item={item} />)
                })}
            </ItemsContainer>
            {/* device item modal */}
            {/* using IIFE allows the use of if-else statement in JSX */}
            {
                (() => {if(modalVisibility) {
                    const { description, name, imgUrl, price } = modalData;
                    return(
                        <Modal>
                            <ModalWrapper>
                                <ModalImageContainer>
                                    <ModalImage src={imgUrl} />
                                </ModalImageContainer>
                                <ModalSectionContainer>
                                    <ModalNameContainer> {name} </ModalNameContainer>
                                    <ModalDescriptionContainer> {description} </ModalDescriptionContainer>
                                    <ModalFooterContainer>
                                        <ModalPriceContainer> &#8358;{price} </ModalPriceContainer>
                                        <ModalCustomButtonContainer as={CustomButton}
                                         onClick={() => {toggleItemModal(null)}}>CLOSE</ModalCustomButtonContainer>
                                    </ModalFooterContainer>
                                </ModalSectionContainer>
                            </ModalWrapper>
                        </Modal>
                    )
                } else {
                    return null
                }})()
            }
        </DevicePageContainer>
    );
}

const mapStateToProps = (state, ownProps) => {
    return({
        device: selectDevice(ownProps.deviceId)(state),
        modalVisibility: state.itemModal.modalVisibility,
        modalData: state.itemModal.modalData
    });
}

const mapDispatchToProps = (dispatch) => {
    return({
        toggleItemModal: (item) => {
            // toggle item modal and pass in the device item data as 'item'
            return(dispatch(toggleItemModal(item)))
        }
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(DevicePage);