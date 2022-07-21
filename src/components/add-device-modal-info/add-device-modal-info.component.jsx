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

const AddDeviceModalInfo = ({closeAddDeviceModal}) => {
    return(
        <AddDeviceModalInfoContainer>
            <TitleContainer>
                ADD NEW DEVICE
            </TitleContainer>
            <FormsContainer>
                <DeviceForm formId="addDevice" handleSubmit={(e) => {
                    e.preventDefault();
                    console.log('Device Tracked!')
                }}>
                    <TrackButton 
                     type="submit"
                     form="addDevice" 
                     value="TRACK"
                    />
                </DeviceForm>
                <DeviceItemForm formId="addDeviceItem" isFirstItem handleSubmit={(e) => {
                    e.preventDefault();
                    console.log('Device Item Tracked!')
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
                    alert('Device Successfully Created!')
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