import { DeviceBarDropdownContainer, CustomButtonContainer } from "./device-bar-dropdown.styles";
import { CustomButton } from "../custom-button/custom-button.component";
import { connect } from 'react-redux/es/exports';
import { showDeviceItemsModal, showDeviceEditModal } from "../../redux/admin/admin.actions";

const DeviceBarDropdown = ({ deviceData, showDeviceItemsModal, showDeviceEditModal }) => {
    return(
        <DeviceBarDropdownContainer>
            <CustomButtonContainer 
             as={CustomButton}
             border='none'
             bgColor='#186f9e'
             color='#fff'
             onClick={() => {showDeviceEditModal(deviceData)}}
            >Edit</CustomButtonContainer>
            <CustomButtonContainer 
             as={CustomButton}
             border='none'
             bgColor='#a721cc'
             color='#fff'
             onClick={showDeviceItemsModal}
            >View Items</CustomButtonContainer>
            <CustomButtonContainer 
             as={CustomButton}
             border='none'
             bgColor='#cc6447'
             color='#fff'
            >Delete</CustomButtonContainer>
        </DeviceBarDropdownContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return({
        showDeviceItemsModal: (items) => {
            return dispatch(showDeviceItemsModal(items))
        },
        showDeviceEditModal: (deviceItem) => {
            return dispatch(showDeviceEditModal(deviceItem))
        }
    })
}

export default connect(null, mapDispatchToProps)(DeviceBarDropdown);
