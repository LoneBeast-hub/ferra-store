import { DeviceBarDropdownContainer, CustomButtonContainer } from "./device-bar-dropdown.styles";
import { CustomButton } from "../custom-button/custom-button.component";
import { connect } from 'react-redux/es/exports';
import { showDeviceItemsModal, getDeviceData } from "../../redux/admin/admin.actions";

const DeviceBarDropdown = ({ 
    deviceData, showDeviceItemsModal, getDeviceData 
}) => {
    return(
        <DeviceBarDropdownContainer>
            <CustomButtonContainer 
             as={CustomButton}
             border='none'
             bgColor='#a721cc'
             color='#fff'
             onClick={() => {
                showDeviceItemsModal()
                getDeviceData(deviceData)
            }
            }
            >View Items</CustomButtonContainer>
        </DeviceBarDropdownContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return({
        showDeviceItemsModal: () => {
            return dispatch(showDeviceItemsModal())
        },
        getDeviceData: (deviceData) => {
            return dispatch(getDeviceData(deviceData))
        }
    })
}

export default connect(null, mapDispatchToProps)(DeviceBarDropdown);
