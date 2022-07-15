import { 
    DeviceItemsModalInfoContainer, ModalCustomButtonContainer,
    ModalCustomButton, TitleContainer, ItemsContainer,
    IconWrap, AddIcon
} from "./device-items-modal-info.styles";
import { CustomButton } from "../custom-button/custom-button.component";
import { connect } from 'react-redux/es/exports';
import { showDeviceItemsModal } from "../../redux/admin/admin.actions";
import { FaPlus } from 'react-icons/fa';
import { useEffect } from "react";
import { fetchSectionItemsStart } from "../../redux/directory/directory.actions";
import { selectDevice } from "../../redux/directory/directory.selectors";
import { selectIsSectionItemsLoaded } from "../../redux/directory/directory.selectors";
import { Spinner } from "../spinner/spinner.component";
import { DeviceModalItem } from "../device-modal-item/device-modal-item.component";

const DeviceItemsModalInfo = ({ 
    closeDeviceItemsModal, fetchSectionItemsStart, 
    deviceItems, isLoading
}) => {
    useEffect(() => {
        fetchSectionItemsStart()
    }, [fetchSectionItemsStart])
    console.log(deviceItems)
    return(
        !isLoading? <DeviceItemsModalInfoContainer>
            <TitleContainer> {deviceItems.title.toUpperCase()} </TitleContainer>
            <ItemsContainer>
                {deviceItems.items.map((item) => {
                    return <DeviceModalItem key={item.id} item={item} />
                })}
            </ItemsContainer>
            <ModalCustomButtonContainer>
                <IconWrap>
                    <AddIcon as={FaPlus}/>
                </IconWrap>
                <ModalCustomButton as={CustomButton}
                bgColor='#f05435'
                border= 'none'
                color='#fff'
                bgColorHover='#d13111'
                onClick={() => {closeDeviceItemsModal(null)}}
                >CLOSE</ModalCustomButton>
            </ModalCustomButtonContainer>
        </DeviceItemsModalInfoContainer> : <Spinner />
    )
}

const mapStateToProps = (state, ownProps) => {
    return({
        deviceItems: selectDevice(ownProps.deviceItemsCheck)(state),
        isLoading: !selectIsSectionItemsLoaded(state)
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        closeDeviceItemsModal: (items) => {
            return(dispatch(showDeviceItemsModal(items)))
        },
        fetchSectionItemsStart: () => {
            return(dispatch(fetchSectionItemsStart()))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceItemsModalInfo);