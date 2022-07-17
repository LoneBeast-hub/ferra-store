import { 
    DescriptionContainer,
    DeviceModalItemContainer, IconsContainer, 
    ImgContainer, InfoContainer, NameContainer, PriceContainer 
} from "./device-modal-item.styles";
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { connect } from 'react-redux/es/exports';
import { showEditDeviceItemModal } from "../../redux/admin/admin.actions";

const DeviceModalItem = ({ item, showEditDeviceItemModal }) => {
    const { description, imgUrl, name, price } = item;
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
                <MdEdit onClick={() => {
                    showEditDeviceItemModal(item)
                }} />
                <MdDelete />
            </IconsContainer>
        </DeviceModalItemContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return({
        showEditDeviceItemModal: (deviceItemData) => {
            return dispatch(showEditDeviceItemModal(deviceItemData))
        }
    })
}

export default connect(null, mapDispatchToProps)(DeviceModalItem);