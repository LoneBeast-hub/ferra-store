import { useState } from 'react';
import { connect } from 'react-redux';
import { selectDevice } from '../../redux/directory/directory.selectors';
import DeviceItem from '../../components/device-item/device-item.component';
// styled components
import { 
    DevicePageContainer, TitleContainer, ItemsContainer,
    Filters, EmptyContainer
} from './device-page.styles';
// components
import { Modal } from '../../components/modal/modal.component';
import { SearchBox } from '../../components/search-box/search-box.component';
import DeviceInfoModal from '../../components/device-info-modal/device-info-modal.component';

const DevicePage = ({ 
        device, modalVisibility, 
        modalData
    }) => {
    const [searchFilterValue, setSearchFilterValue] = useState('');
    const { title, items } = device;

    // search Filter
    const filteredItems = items.filter((item) => {
            return item.name.toLowerCase().includes(searchFilterValue.toLowerCase())
            || item.brand.toLowerCase().includes(searchFilterValue.toLowerCase())
    });

    return(
        <DevicePageContainer>
            <TitleContainer> {title} </TitleContainer>
            {/* Search Box */}
            <Filters>
                <SearchBox
                 type='search'
                 placeholder='Search'
                 handleChange={(e) => {
                    return setSearchFilterValue(e.target.value)
                 }}
                 />
            </Filters>
            {/* Items */}
            <ItemsContainer>
                {filteredItems.length? filteredItems.map((item) => {
                    return(<DeviceItem key={item.id} item={item} />);
                }) : <EmptyContainer>No items</EmptyContainer>}
            </ItemsContainer>
            {/* device item modal */}
            {modalVisibility? <Modal>
                <DeviceInfoModal modalData={modalData} />
            </Modal> : null}
        </DevicePageContainer>
    );
}

const mapStateToProps = (state, ownProps) => {
    return({
        device: selectDevice(ownProps.deviceId)(state),
        modalVisibility: state.itemModal.modalVisibility,
        modalData: state.itemModal.modalData,
    });
}

export default connect(mapStateToProps)(DevicePage);