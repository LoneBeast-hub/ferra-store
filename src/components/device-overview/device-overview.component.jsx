import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { DevicePreview } from '../device-preview/device-preview.component';
import { selectSectionItemsAsArray } from '../../redux/directory/directory.selectors';
import { selectModalVisibility, selectModalData } from '../../redux/item-modal/item-modal.selectors';
import { Modal } from '../modal/modal.component';
import DeviceInfoModal from '../device-info-modal/device-info-modal.component';

// styled components
import { DeviceOverviewContainer } from './device-overview.styles';

const DevicesOverview = ({ sectionItems, modalData, modalVisibility }) => {
    return(
        <DeviceOverviewContainer>
            {
                sectionItems.map(({id, ...otherDeviceProps}) => {
                    return(
                        <DevicePreview key={id} {...otherDeviceProps} />
                    );
                })
            }
            {modalVisibility? <Modal>
                <DeviceInfoModal modalData={modalData} />
            </Modal> : null}
        </DeviceOverviewContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    sectionItems: selectSectionItemsAsArray,
    modalVisibility: selectModalVisibility,
    modalData: selectModalData
})

export default connect(mapStateToProps)(DevicesOverview);