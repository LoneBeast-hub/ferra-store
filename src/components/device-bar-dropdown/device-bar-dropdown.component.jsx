import { DeviceBarDropdownContainer, CustomButtonContainer } from "./device-bar-dropdown.styles";
import { CustomButton } from "../custom-button/custom-button.component";
import { connect } from 'react-redux/es/exports';
import { showDeviceItemsModal } from "../../redux/admin/admin.actions";

const DeviceBarDropdown = ({ showDeviceItemsModal }) => {
    const handleClick = () => {
        showDeviceItemsModal()
    }
    return(
        <DeviceBarDropdownContainer>
            <CustomButtonContainer 
             as={CustomButton}
             border='none'
             bgColor='#186f9e'
             color='#fff'
            >Edit</CustomButtonContainer>
            <CustomButtonContainer 
             as={CustomButton}
             border='none'
             bgColor='#a721cc'
             color='#fff'
             onClick={handleClick}
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
        }
    })
}

export default connect(null, mapDispatchToProps)(DeviceBarDropdown);
