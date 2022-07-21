import DeviceItemForm from "../device-item-form/device-item-form.component";
import { 
    DeviceItemsModalInfoContainer, FormsContainer,
    CustomButtonsContainer, ModalCustomButton
} from "./edit-device-item-modal-info.styles";
import { CustomButton } from "../custom-button/custom-button.component";
import { showEditDeviceItemModal } from "../../redux/admin/admin.actions";
import { connect } from 'react-redux/es/exports';
import { selectDeviceItemId, selectDeviceIdToCRUDItem } from "../../redux/admin/admin.selectors";
import { createStructuredSelector } from "reselect";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";

const EditDeviceItemModalInfo = ({ closeEditDeviceItemModal, deviceItemId, deviceIdToEditItem }) => {
    return(
        <DeviceItemsModalInfoContainer>
            <FormsContainer>
                <DeviceItemForm edit formId='editDeviceItem' handleSubmit={
                    (e) => {
                        e.preventDefault()
                        const brandLetters = /^[A-Za-z ]+$/;
                        if(e.target.deviceItemImgUrl.value.length < 1 ||
                         e.target.deviceItemImgPath.value.length < 1 || 
                         e.target.deviceItemPrice.value.length < 1 || 
                         !e.target.deviceItemBrand.value.match(brandLetters)) {
                            return ;
                        }
                        const deviceItemObj = {
                            brand: e.target.deviceItemBrand.value,
                            description: e.target.deviceItemDescription.value,
                            imgPath: e.target.deviceItemImgPath.value,
                            imgUrl: e.target.deviceItemImgUrl.value,
                            name: e.target.deviceItemName.value,
                            price: e.target.deviceItemPrice.value
                        }

                        // deviceItem collection reference
                        const deviceItemDocRef = doc(db, `sectionItems/${deviceIdToEditItem}/items/${deviceItemId}`);
                        // update document in db
                        updateDoc(deviceItemDocRef, deviceItemObj)
                        .then(() => {
                            e.target.reset();
                            e.target.deviceItemImgPath.value = '';
                            e.target.deviceItemImgUrl.value = '';
                            alert('Item Updated!');
                            closeEditDeviceItemModal({item: null, deviceId: null, routeName: null});
                        })
                    }
                } />
            </FormsContainer>
            <CustomButtonsContainer>
                <ModalCustomButton as={CustomButton}
                bgColor='#3b51e3'
                border= 'none'
                color='#fff'
                form='editDeviceItem'
                >SAVE</ModalCustomButton>
                <ModalCustomButton as={CustomButton}
                bgColor='#f05435'
                border= 'none'
                color='#fff'
                bgColorHover='#d13111'
                onClick={() => {closeEditDeviceItemModal({item: null, deviceId: null})}}
                >CLOSE</ModalCustomButton>
            </CustomButtonsContainer>
        </DeviceItemsModalInfoContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    deviceItemId: selectDeviceItemId,
    deviceIdToEditItem: selectDeviceIdToCRUDItem
})

const mapDispatchToProps = (dispatch) => {
    return({
        closeEditDeviceItemModal: (deviceItemData) => {
            return dispatch(showEditDeviceItemModal(deviceItemData))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDeviceItemModalInfo);