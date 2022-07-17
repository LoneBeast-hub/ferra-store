import DeviceItemForm from "../device-item-form/device-item-form.component";
import { 
    DeviceItemsModalInfoContainer, FormsContainer,
    CustomButtonsContainer, ModalCustomButton
} from "./edit-device-item-modal-info.styles";
import { CustomButton } from "../custom-button/custom-button.component";
import { showEditDeviceItemModal } from "../../redux/admin/admin.actions";
import { connect } from 'react-redux/es/exports';

const EditDeviceItemModalInfo = ({ closeEditDeviceItemModal }) => {
    return(
        <DeviceItemsModalInfoContainer>
            <FormsContainer>
                <DeviceItemForm edit formId='editDeviceItem' handleSubmit={
                    (e) => {
                        e.preventDefault()
                        console.log('Device Successfully Updated!')
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
                onClick={() => {closeEditDeviceItemModal(null)}}
                >CLOSE</ModalCustomButton>
            </CustomButtonsContainer>
        </DeviceItemsModalInfoContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return({
        closeEditDeviceItemModal: (deviceItemData) => {
            return dispatch(showEditDeviceItemModal(deviceItemData))
        }
    })
}

export default connect(null, mapDispatchToProps)(EditDeviceItemModalInfo);