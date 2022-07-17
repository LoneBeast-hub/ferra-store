import DeviceItemForm from "../device-item-form/device-item-form.component";
import { 
    DeviceItemsModalInfoContainer, FormsContainer,
    CustomButtonsContainer, ModalCustomButton
} from "./add-device-item-modal-info.styles";
import { CustomButton } from "../custom-button/custom-button.component";
import { showAddDeviceItemModal } from "../../redux/admin/admin.actions";
import { connect } from 'react-redux/es/exports';

const AddDeviceItemModalInfo = ({ closeAddDeviceItemModal }) => {
    return(
        <DeviceItemsModalInfoContainer>
            <FormsContainer>
                <DeviceItemForm formId='addDeviceItem' handleSubmit={
                    (e) => {
                        e.preventDefault()
                        console.log('Device Successfully Added!')
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
                onClick={() => {closeAddDeviceItemModal(null)}}
                >CLOSE</ModalCustomButton>
            </CustomButtonsContainer>
        </DeviceItemsModalInfoContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return({
        closeAddDeviceItemModal: (deviceId) => {
            return dispatch(showAddDeviceItemModal(deviceId))
        }
    })
}

export default connect(null, mapDispatchToProps)(AddDeviceItemModalInfo);