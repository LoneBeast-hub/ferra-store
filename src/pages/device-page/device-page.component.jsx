import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectDevice } from '../../redux/directory/directory.selectors';
import DeviceItem from '../../components/device-item/device-item.component';
import { fetchSectionItemsStart } from '../../redux/directory/directory.actions';
// styled components
import { 
    DevicePageContainer, 
    TitleContainer, 
    ItemsContainer,
    ModalImageContainer,
    ModalImage,
    ModalWrapper,
    ModalSectionContainer,
    ModalCustomButtonContainer,
    ModalCustomButton,
    ModalDescriptionContainer,
    ModalPriceContainer,
    ModalNameContainer,
    ModalFooterContainer,
    Filters,
    EmptyContainer
} from './device-page.styles';
// components
import { Modal } from '../../components/modal/modal.component';
import { CustomButton } from '../../components/custom-button/custom-button.component';
import { SearchBox } from '../../components/search-box/search-box.component';
// redux related
import { toggleItemModal } from '../../redux/item-modal/item-modal.actions';


const DevicePage = ({ 
        device, modalVisibility, 
        modalData, toggleItemModal, fetchSectionItemsStart
    }) => {
    const [searchFilterValue, setSearchFilterValue] = useState('');
    const { title, items } = device;

    // useEffect(() => {
    //     fetchSectionItemsStart()
    // }, [fetchSectionItemsStart])

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
            {/* using IIFE allows the use of if-else statement in JSX */}
            {
                (() => {if(modalVisibility) {
                    const { description, name, imgUrl, price } = modalData;
                    return(
                        <Modal>
                            <ModalWrapper>
                                <ModalImageContainer>
                                    <ModalImage src={imgUrl} />
                                </ModalImageContainer>
                                <ModalSectionContainer>
                                    <ModalNameContainer> {name} </ModalNameContainer>
                                    <ModalDescriptionContainer> {description} </ModalDescriptionContainer>
                                    <ModalFooterContainer>
                                        <ModalPriceContainer> &#8358;{price} </ModalPriceContainer>
                                        <ModalCustomButtonContainer>
                                            <ModalCustomButton as={CustomButton}
                                            bgColor='#f05435'
                                            border= 'none'
                                            color='#fff'
                                            bgColorHover='#d13111'
                                            onClick={() => {toggleItemModal(null)}}>CLOSE</ModalCustomButton>
                                        </ModalCustomButtonContainer>
                                    </ModalFooterContainer>
                                </ModalSectionContainer>
                            </ModalWrapper>
                        </Modal>
                    )
                } else {
                    return null
                }})()
            }
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

const mapDispatchToProps = (dispatch) => {
    return({
        toggleItemModal: (item) => {
            // toggle item modal and pass in the device item data as 'item'
            return(dispatch(toggleItemModal(item)))
        },
        fetchSectionItemsStart: () => {
            return(dispatch(fetchSectionItemsStart()))
        }
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(DevicePage);