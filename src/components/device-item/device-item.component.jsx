import { CustomButton } from '../custom-button/custom-button.component';

// styled Components
import { DeviceItemContainer, ImageContainer, DeviceFooterContainer, DeviceSectionContainer, NameContainer, PriceContainer, CustomButtonContainer, ButtonsContainer, Image, DescriptionContainer } from './device-item.styles';

const DeviceItem = ({ item }) => {
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
                     >Read More</CustomButtonContainer>
                </ButtonsContainer>
            </DeviceFooterContainer>
        </DeviceItemContainer>
    );
}

export default DeviceItem;