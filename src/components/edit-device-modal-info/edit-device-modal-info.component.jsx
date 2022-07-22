import { 
    EditDeviceModalInfoContainer, CustomButtonsContainer,
    ModalCustomButton, TitleContainer, FormsContainer,
    TrackButton
} from "./edit-device-modal-info.styles";
import { CustomButton } from "../custom-button/custom-button.component";
import { showDeviceEditModal } from "../../redux/admin/admin.actions";
import { connect } from 'react-redux/es/exports';
import DeviceForm from "../device-form/device-form.component";
import ItemsFieldsForm from "../items-fields-form/items-fields-form.component";
import { useState } from "react";
import { db } from "../../firebase/firebase.utils";
import { doc, updateDoc } from "firebase/firestore";
import { selectDeviceEditData, selectDeviceIdToCRUDItem } from "../../redux/admin/admin.selectors";
import { createStructuredSelector } from 'reselect';

const EditDeviceModalInfo = ({closeDeviceEditModal, deviceEditData, deviceItemsId}) => {
    const [deviceObj, setDeviceObj] = useState(null);
    const [deviceItemInfo, setDeviceItemInfo] = useState(null);
    return(
        <EditDeviceModalInfoContainer>
            <TitleContainer>
                EDIT DEVICE
            </TitleContainer>
            <FormsContainer>
                <DeviceForm formId="updateDevice" edit handleSubmit={(e) => {
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
                     form="updateDevice" 
                     value="TRACK"
                    />
                </DeviceForm>
                <ItemsFieldsForm formId="updateDeviceItemsFields"
                 handleSubmit={(e) => {
                    e.preventDefault();
                    if(e.target.deviceItemsTitle.value.length < 1 ||
                        e.target.deviceItemsRouteName.value.length < 1) {
                        return ;
                    }

                    // save device item info to state
                    setDeviceItemInfo({
                        title: e.target.deviceItemsTitle.value,
                        routeName: e.target.deviceItemsRouteName.value
                    })
                    alert('Items Fields Tracked!')
                 }}>
                    <TrackButton 
                     type="submit"
                     form="updateDeviceItemsFields" 
                     value="TRACK"
                    />
                </ItemsFieldsForm>
            </FormsContainer>
            <CustomButtonsContainer>
                <ModalCustomButton as={CustomButton}
                bgColor='#3b51e3'
                border= 'none'
                color='#fff'
                onClick={() => {
                    if(!deviceObj || !deviceItemInfo ) {
                        return ;
                    }

                    // device document reference
                    const deviceDocRef = doc(db, `sections/${deviceEditData.id}`)
                    // update device document
                    updateDoc(deviceDocRef, deviceObj)
                    .then(() => {
                        // deviceItems document ref
                        const deviceItemsDocRef = doc(db, `sectionItems/${deviceItemsId}`);
                        // update deviceItems data
                        updateDoc(deviceItemsDocRef, deviceItemInfo);
                        alert('Device Updated!')
                        closeDeviceEditModal({id: null, routeName: null});
                    })
                    .catch((error) => {
                        alert(`Error Failed to Update: ${error}`)
                    })
                }}
                >SAVE</ModalCustomButton>
                <ModalCustomButton as={CustomButton}
                bgColor='#f05435'
                border= 'none'
                color='#fff'
                bgColorHover='#d13111'
                onClick={() => {closeDeviceEditModal({id: null, routeName: null})}}
                >CLOSE</ModalCustomButton>
            </CustomButtonsContainer>
        </EditDeviceModalInfoContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    deviceEditData: selectDeviceEditData,
    deviceItemsId: selectDeviceIdToCRUDItem
})

const mapDispatchToProps = (dispatch) => {
    return({
        closeDeviceEditModal: (deviceData) => {
            return dispatch(showDeviceEditModal(deviceData))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDeviceModalInfo);