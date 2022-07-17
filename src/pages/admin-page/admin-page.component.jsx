import { useEffect } from "react";
import { AdminPageContainer } from "./admin-page.styles";
import AdminDirectoryContainer from "../../components/admin-directory/admin-directory.container";
import { fetchSectionsStart } from "../../redux/directory/directory.actions";
import { connect } from 'react-redux/es/exports';
import { Modal } from "../../components/modal/modal.component";
import { createStructuredSelector } from "reselect";
import { 
    selectShowDeviceItemsModal, selectDeviceItemsCheck,
    selectShowAddDeviceModal, selectShowDeviceEditModal,
    selectShowAddDeviceItemModal, selectShowEditDeviceItemModal
} from "../../redux/admin/admin.selectors";
import DeviceItemsModalInfo from "../../components/device-items-modal-info/device-items-modal-info.component";
import AddDeviceModalInfo from "../../components/add-device-modal-info/add-device-modal-info.component";
import EditDeviceModalInfo from "../../components/edit-device-modal-info/edit-device-modal-info.component";
import AddDeviceItemModalInfo from "../../components/add-device-item-modal-info/add-device-item-modal-info.component";
import EditDeviceItemModalInfo from "../../components/edit-device-item-modal-info/edit-device-item-modal-info.component";

const AdminPage = ({ 
    fetchSectionsStart, showDeviceItemsModal, 
    deviceItemsCheck, showAddDeviceModal,
    showDeviceEditModal, showAddDeviceItemModal,
    showEditDeviceItemModal
}) => {
    useEffect(() => {
        fetchSectionsStart()
    }, [fetchSectionsStart])
    return(
        <AdminPageContainer>
            <AdminDirectoryContainer />
            {/* device/section items modal */}
            {
                showDeviceItemsModal? 
                    <Modal>
                        <DeviceItemsModalInfo deviceItemsCheck={deviceItemsCheck} />
                    </Modal>
                : null
            }
            {/* add device/section modal */}
            {
                showAddDeviceModal?
                    <Modal>
                        <AddDeviceModalInfo />
                    </Modal>
                : null
            }
            {/* edit device/section modal */}
            {
                showDeviceEditModal?
                    <Modal>
                        <EditDeviceModalInfo />
                    </Modal>
                : null
            }
            {/* add device/section item modal */}
            {
                showAddDeviceItemModal?
                    <Modal>
                        <AddDeviceItemModalInfo />
                    </Modal>
                : null
            }
            {/* edit device/section item modal */}
            {
                showEditDeviceItemModal?
                    <Modal>
                        <EditDeviceItemModalInfo />
                    </Modal>
                : null
            }
        </AdminPageContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    showDeviceItemsModal: selectShowDeviceItemsModal,
    deviceItemsCheck: selectDeviceItemsCheck,
    showAddDeviceModal: selectShowAddDeviceModal,
    showDeviceEditModal: selectShowDeviceEditModal,
    showAddDeviceItemModal: selectShowAddDeviceItemModal,
    showEditDeviceItemModal: selectShowEditDeviceItemModal
})

const mapDispatchToProps = (dispatch) => {
    return({
        fetchSectionsStart: () => {
            return dispatch(fetchSectionsStart())
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);