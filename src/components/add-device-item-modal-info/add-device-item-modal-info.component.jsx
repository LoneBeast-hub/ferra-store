import DeviceItemForm from "../device-item-form/device-item-form.component";
import { 
    DeviceItemsModalInfoContainer, FormsContainer,
    CustomButtonsContainer, ModalCustomButton
} from "./add-device-item-modal-info.styles";
import { CustomButton } from "../custom-button/custom-button.component";
import { showAddDeviceItemModal } from "../../redux/admin/admin.actions";
import { connect } from 'react-redux/es/exports';
import { addDoc, collection } from 'firebase/firestore';
import { db } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";
import { selectDeviceIdToCRUDItem } from "../../redux/admin/admin.selectors";

const AddDeviceItemModalInfo = ({ closeAddDeviceItemModal, deviceIdToAddItem }) => {
    return(
        <DeviceItemsModalInfoContainer>
            <FormsContainer>
                <DeviceItemForm formId='addDeviceItem' handleSubmit={
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
                        const deviceItemColRef = collection(db, `sectionItems/${deviceIdToAddItem}/items`);
                        // add document to db
                        addDoc(deviceItemColRef, deviceItemObj)
                        .then(() => {
                            e.target.reset();
                            e.target.deviceItemImgPath.value = '';
                            e.target.deviceItemImgUrl.value = '';
                            alert('Item Added!');
                            closeAddDeviceItemModal({id: null, routeName: null});
                        })
                    }
                } />
            </FormsContainer>
            <CustomButtonsContainer>
                <ModalCustomButton as={CustomButton}
                bgColor='#3b51e3'
                border= 'none'
                color='#fff'
                form='addDeviceItem'
                >SAVE</ModalCustomButton>
                <ModalCustomButton as={CustomButton}
                bgColor='#f05435'
                border= 'none'
                color='#fff'
                bgColorHover='#d13111'
                onClick={() => {closeAddDeviceItemModal({id: null, routeName: null})}}
                >CLOSE</ModalCustomButton>
            </CustomButtonsContainer>
        </DeviceItemsModalInfoContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    deviceIdToAddItem: selectDeviceIdToCRUDItem
})

const mapDispatchToProps = (dispatch) => {
    return({
        closeAddDeviceItemModal: (deviceInfo) => {
            return dispatch(showAddDeviceItemModal(deviceInfo))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDeviceItemModalInfo);