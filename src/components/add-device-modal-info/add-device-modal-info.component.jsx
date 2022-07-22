import { 
    AddDeviceModalInfoContainer, CustomButtonsContainer,
    ModalCustomButton, TitleContainer, FormsContainer,
    TrackButton
} from "./add-device-modal-info.styles";
import { CustomButton } from "../custom-button/custom-button.component";
import { showAddDeviceModal } from "../../redux/admin/admin.actions";
import { connect } from 'react-redux/es/exports';
import DeviceForm from "../device-form/device-form.component";
import DeviceItemForm from "../device-item-form/device-item-form.component";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";

const AddDeviceModalInfo = ({closeAddDeviceModal}) => {
    const [deviceObj, setDeviceObj] = useState(null);
    const [deviceItemObj, setDeviceItemObj] = useState(null);
    const [deviceItemInfo, setDeviceItemInfo] = useState(null);
    return(
        <AddDeviceModalInfoContainer>
            <TitleContainer>
                ADD NEW DEVICE
            </TitleContainer>
            <FormsContainer>
                <DeviceForm formId="addDevice" handleSubmit={(e) => {
                    e.preventDefault();
                    const checkTitle = /[-!$%^&*()_+|~=`\\#{}[\]:";'<>?,./]/.test(e.target.deviceTitle.value);
                    if(checkTitle || e.target.deviceImgUrl.value.length < 1 || 
                    e.target.deviceImgPath.value.length < 1) {
                        return ;
                    }

                    // save device obj to state
                    setDeviceObj({
                        title: e.target.deviceTitle.value,
                        imgUrl: e.target.deviceImgUrl.value,
                        imgPath: e.target.deviceImgPath.value,
                        routeName: e.target.deviceRouteName.value,
                        routePath: e.target.deviceRoutePath.value
                    })

                    alert('Device Details Tracked!');
                }}>
                    <TrackButton 
                     type="submit"
                     form="addDevice" 
                     value="TRACK"
                    />
                </DeviceForm>
                <DeviceItemForm formId="addDeviceItem" isFirstItem handleSubmit={(e) => {
                    e.preventDefault();
                    const brandLetters = /^[A-Za-z ]+$/;
                    if(e.target.deviceItemImgUrl.value.length < 1 ||
                        e.target.deviceItemImgPath.value.length < 1 || 
                        e.target.deviceItemPrice.value.length < 1 || 
                        e.target.deviceItemsTitle.value.length < 1 ||
                        e.target.deviceItemsRouteName.value.length < 1 ||
                        !e.target.deviceItemBrand.value.match(brandLetters)) {
                        return ;
                    }

                    // save device item info to state
                    setDeviceItemInfo({
                        title: e.target.deviceItemsTitle.value,
                        routeName: e.target.deviceItemsRouteName.value
                    })

                    // save device item obj to state
                    setDeviceItemObj({
                        brand: e.target.deviceItemBrand.value,
                        description: e.target.deviceItemDescription.value,
                        imgPath: e.target.deviceItemImgPath.value,
                        imgUrl: e.target.deviceItemImgUrl.value,
                        name: e.target.deviceItemName.value,
                        price: e.target.deviceItemPrice.value
                    })

                    alert('Device Item Details Tracked')
                }}>
                    <TrackButton 
                     type="submit"
                     form="addDeviceItem" 
                     value="TRACK"
                    />
                </DeviceItemForm>
            </FormsContainer>
            <CustomButtonsContainer>
                <ModalCustomButton as={CustomButton}
                bgColor='#3b51e3'
                border= 'none'
                color='#fff'
                onClick={() => {
                    if(!deviceObj || !deviceItemInfo || !deviceItemObj) {
                        return ;
                    }

                    // section/device reference
                    const deviceColRef = collection(db, 'sections')
                    // add device Obj to db
                    addDoc(deviceColRef, deviceObj)
                    .then(() => {
                        // reference to sectionItems
                        const deviceItemsColRef = collection(db, 'sectionItems');
                        // add device Items collection doc after adding device
                        addDoc(deviceItemsColRef, deviceItemInfo)
                        .then((response) => {
                            // reference to the newly created doc's items collection
                            const deviceItemsItemColRef = collection(db, `sectionItems/${response.id}/items`);
                            // add the first item to the collection
                            addDoc(deviceItemsItemColRef, deviceItemObj);
                        })
                        alert('Device Added!');
                        closeAddDeviceModal();
                    })
                    .catch((error) => {
                        alert(`Error! Device Addition Failed: ${error}`)
                    })
                }}
                >SAVE</ModalCustomButton>
                <ModalCustomButton as={CustomButton}
                bgColor='#f05435'
                border= 'none'
                color='#fff'
                bgColorHover='#d13111'
                onClick={closeAddDeviceModal}
                >CLOSE</ModalCustomButton>
            </CustomButtonsContainer>
        </AddDeviceModalInfoContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return({
        closeAddDeviceModal: () => {
            return dispatch(showAddDeviceModal())
        }
    })
}

export default connect(null, mapDispatchToProps)(AddDeviceModalInfo);