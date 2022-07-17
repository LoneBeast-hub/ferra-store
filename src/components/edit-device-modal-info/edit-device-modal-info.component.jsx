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

const EditDeviceModalInfo = ({closeDeviceEditModal}) => {
    return(
        <EditDeviceModalInfoContainer>
            <TitleContainer>
                EDIT DEVICE
            </TitleContainer>
            <FormsContainer>
                <DeviceForm formId="updateDevice" handleSubmit={(e) => {
                    e.preventDefault();
                    console.log('Device Tracked!')
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
                    console.log('Items Fields Tracked!')
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
                    alert('Device Successfully Updated!')
                }}
                >SAVE</ModalCustomButton>
                <ModalCustomButton as={CustomButton}
                bgColor='#f05435'
                border= 'none'
                color='#fff'
                bgColorHover='#d13111'
                onClick={() => {closeDeviceEditModal(null)}}
                >CLOSE</ModalCustomButton>
            </CustomButtonsContainer>
        </EditDeviceModalInfoContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return({
        closeDeviceEditModal: (deviceData) => {
            return dispatch(showDeviceEditModal(deviceData))
        }
    })
}

export default connect(null, mapDispatchToProps)(EditDeviceModalInfo);