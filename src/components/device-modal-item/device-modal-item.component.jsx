import { 
    DescriptionContainer,
    DeviceModalItemContainer, IconsContainer, 
    ImgContainer, InfoContainer, NameContainer, PriceContainer 
} from "./device-modal-item.styles";
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

export const DeviceModalItem = ({item: {
    brand, description, id, 
    imgUrl, name, price
}}) => {
    return(
        <DeviceModalItemContainer>
            <ImgContainer src={imgUrl} alt="item" />
            <InfoContainer>
                <NameContainer>
                    {name.toUpperCase()}
                </NameContainer>
                <DescriptionContainer>
                    {description}
                </DescriptionContainer>
                <PriceContainer>
                    &#8358;{price}
                </PriceContainer>
            </InfoContainer>
            <IconsContainer>
                <MdEdit />
                <MdDelete />
            </IconsContainer>
        </DeviceModalItemContainer>
    )
}