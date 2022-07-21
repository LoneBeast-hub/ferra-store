import { 
    DescriptionContainer,
    DeviceModalItemContainer, IconsContainer, 
    ImgContainer, InfoContainer, NameContainer, PriceContainer 
} from "./device-modal-item.styles";
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { connect } from 'react-redux/es/exports';
import { showEditDeviceItemModal } from "../../redux/admin/admin.actions";
import { ref, deleteObject } from "firebase/storage";
import { storage, db } from "../../firebase/firebase.utils";
import { doc, deleteDoc } from "firebase/firestore";

const DeviceModalItem = ({ item, showEditDeviceItemModal, deviceId, routeName }) => {
    const { description, imgUrl, name, price, id, imgPath } = item;
    const deleteItem = () => {
        // delete item image first
        // img ref
        const imgRef = ref(storage, imgPath);
        // delete img from storage
        deleteObject(imgRef);

        const deviceItemDocRef = doc(db, `sectionItems/${deviceId}/items/${id}`);
        deleteDoc(deviceItemDocRef)
        .then(() => {
            alert('Item Deleted!')
        })
        .catch((error) => {
            alert(`Error! Item deletion failed: ${error}`)
        })
    }
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
                    showEditDeviceItemModal({item, deviceId, routeName})
                }} />
                <MdDelete onDoubleClick={deleteItem}/>
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