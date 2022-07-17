import AdminMenuItem from "../admin-menu-item/admin-menu-item.component";
import { selectDirectorySectionsAsArray } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux/es/exports";
import CustomAddButton from "../custom-add-button/custom-add-button.component";
import { AdminDirectoryMenuContainer } from "./admin-directory.styles";
import { showAddDeviceModal } from "../../redux/admin/admin.actions";

const AdminDirectory = ({ sections, showAddDeviceModal }) => {
    return(
        <AdminDirectoryMenuContainer>
            {
                sections.map(({id, ...otherProps}) => {
                    return(
                        <AdminMenuItem key={id} props={{...otherProps, id: id}} />
                    )
                })
            }
            <CustomAddButton handleClick={showAddDeviceModal} />
        </AdminDirectoryMenuContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySectionsAsArray
})

const mapDispatchToProps = (dispatch) => {
    return({
        showAddDeviceModal: () => {
            return dispatch(showAddDeviceModal())
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDirectory);