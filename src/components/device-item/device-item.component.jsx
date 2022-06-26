import { CustomButton } from '../custom-button/custom-button.component';

// redux related
import { toggleItemModal } from '../../redux/item-modal/item-modal.actions';
import { connect } from 'react-redux';

// styled Components
import { DeviceItemContainer, ImageContainer, DeviceFooterContainer, DeviceSectionContainer, NameContainer, PriceContainer, CustomButtonContainer, ButtonsContainer, Image, DescriptionContainer } from './device-item.styles';

const DeviceItem = ({ item, toggleItemModal }) => {
    const { name, price, imgUrl, description } = item;
    return(
        <DeviceItemContainer>
            <ImageContainer>
                <Image src={imgUrl} />
            </ImageContainer>
            <DeviceSectionContainer>
                <NameContainer> {name} </NameContainer>
                <DescriptionContainer> {description} </DescriptionContainer>
            </DeviceSectionContainer>
            <DeviceFooterContainer>
                <PriceContainer> &#8358;{price} </PriceContainer>
                <ButtonsContainer>
                    <CustomButtonContainer as={CustomButton}
                     bgColor='#15ed52'
                     border='none'
                     color='#fff'
                     >Add to Cart</CustomButtonContainer>
                    <CustomButtonContainer as={CustomButton}
                     bgColor='#1ac1f0'
                     border='none'
                     color='#fff'
                     onClick={() => {toggleItemModal(item)}}
                     >Read More</CustomButtonContainer>
                </ButtonsContainer>
            </DeviceFooterContainer>
        </DeviceItemContainer>
    );
}

const mapDispatchToProps = (dispatch) => {
    return({
        toggleItemModal: (item) => {
            // toggle item modal and pass in the device item data as 'item'
            return(dispatch(toggleItemModal(item)))
        }
    });
}

export default connect(null, mapDispatchToProps)(DeviceItem);