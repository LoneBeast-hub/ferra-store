import { useEffect } from "react";
import { AdminPageContainer } from "./admin-page.styles";
import AdminDirectoryContainer from "../../components/admin-directory/admin-directory.container";
import { fetchSectionsStart } from "../../redux/directory/directory.actions";
import { connect } from 'react-redux/es/exports';
import { Modal } from "../../components/modal/modal.component";
import { createStructuredSelector } from "reselect";
import { selectShowDeviceItemsModal } from "../../redux/admin/admin.selectors";
import DeviceItemsModalInfo from "../../components/device-items-modal-info/device-items-modal-info.component";
import { selectDeviceItemsCheck } from "../../redux/admin/admin.selectors";

const AdminPage = ({ fetchSectionsStart, showDeviceItemsModal, isLoading, deviceItemsCheck }) => {
    useEffect(() => {
        fetchSectionsStart()
    }, [fetchSectionsStart])
    return(
        <AdminPageContainer>
            <AdminDirectoryContainer />
            {
                showDeviceItemsModal? 
                    <Modal>
                        <DeviceItemsModalInfo deviceItemsCheck={deviceItemsCheck} />
                    </Modal>
                : null
            }
        </AdminPageContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    showDeviceItemsModal: selectShowDeviceItemsModal,
    deviceItemsCheck: selectDeviceItemsCheck
})

const mapDispatchToProps = (dispatch) => {
    return({
        fetchSectionsStart: () => {
            return dispatch(fetchSectionsStart())
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);