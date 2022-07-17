import { 
    MenuItemContainer, BgImageContainer, 
    ContentContainer, TitleContainer,
    DotIconWrap, DotIcon
} from "./admin-menu-item.styles";
import { BsThreeDots } from 'react-icons/bs';
import { toggleDeviceBar } from "../../redux/admin/admin.actions";
import { connect } from 'react-redux/es/exports';
import { createStructuredSelector } from "reselect";
import { selectDeviceBarToggle, selectDeviceBarToggledId } from "../../redux/admin/admin.selectors";
import DeviceBarDropdown from "../device-bar-dropdown/device-bar-dropdown.component";

const AdminMenuItem = ({props: { id, title, imgUrl, routeName, routePath }, 
    toggleDeviceBar, deviceBarToggle, deviceBarToggledId
}) => {
    return(
        <MenuItemContainer>
            <BgImageContainer imageUrl={imgUrl} />
            <DotIconWrap
             onClick={() => {
                toggleDeviceBar({id: !deviceBarToggle? id : undefined, routeName})
             }}
            >
                <DotIcon as={BsThreeDots} />
            </DotIconWrap>
            <ContentContainer>
                <TitleContainer> { title.toUpperCase() } </TitleContainer>
            </ContentContainer>
            {/* Only show the device dropdown when the device id matches
            with the clicked device bar */}
            {
                deviceBarToggledId===id? 
                    <DeviceBarDropdown deviceData={
                        {id, title, imgUrl, routeName, routePath}
                    } /> 
                : null
            }
        </MenuItemContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    deviceBarToggle: selectDeviceBarToggle,
    deviceBarToggledId: selectDeviceBarToggledId
})

const mapDispatchToProps = (dispatch) => {
    return({
        toggleDeviceBar: (data) => {
            return dispatch(toggleDeviceBar(data))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminMenuItem);