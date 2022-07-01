import { useState } from 'react';
import { connect } from 'react-redux';
import { selectDevice } from '../../redux/directory/directory.selectors';
import DeviceItem from '../../components/device-item/device-item.component';
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
    FilterIcon,
    FilterIconContainer,
    Filters,
    EmptyContainer
} from './device-page.styles';
// components
import { Modal } from '../../components/modal/modal.component';
import { CustomButton } from '../../components/custom-button/custom-button.component';
import { SearchBox } from '../../components/search-box/search-box.component';
import { ItemsFilterDropdown } from '../../components/items-filter-dropdown/items-filter-dropdown.component';
// redux related
import { toggleItemModal } from '../../redux/item-modal/item-modal.actions';
import { toggleFilterDropdown } from '../../redux/items-filter/items-filter.actions';
// react icon
import { BsFilter } from 'react-icons/bs';


const DevicePage = ({ device, modalVisibility, modalData, toggleItemModal, toggleFilterDropdown, showFilterDropdown, filterDropdownData }) => {
    const [searchFilterValue, setSearchFilterValue] = useState('');
    const { title, items } = device;

    // search Filter
    const filteredItems = items.filter((item) => {
        return item.name.toLowerCase().includes(searchFilterValue.toLowerCase());
    });

    return(
        <DevicePageContainer>
            <TitleContainer> {title} </TitleContainer>
            <Filters>
                <SearchBox
                 type='search'
                 placeholder='Search'
                 handleChange={(e) => {
                    return setSearchFilterValue(e.target.value)
                 }}
                 />
                <FilterIconContainer onClick={() => {toggleFilterDropdown(device)}}>
                    <FilterIcon as={BsFilter} size='1.5rem' />
                </FilterIconContainer>
                {
                    (() => {
                        if(showFilterDropdown) {
                            const { brands, operatingSystems } = filterDropdownData;
                            return(
                                <ItemsFilterDropdown>
                                    {operatingSystems? operatingSystems.map((operatingSystem) => {
                                        return(
                                            <div key={operatingSystem.id}>
                                                <input 
                                                id={operatingSystem.id}
                                                type='checkbox' 
                                                name={operatingSystem.name}
                                                onChange={(e) => {
                                                    // will continue later
                                                    // return setFilterValue([...filterValue, e.target.name]);
                                                }}
                                                />
                                                <label id={operatingSystem.id} > {operatingSystem.name} </label>
                                            </div>
                                        );
                                    }) : null}
                                    {brands.map((brand) => {
                                        return(
                                            <div key={brand.id}>
                                                <input 
                                                id={brand.id}
                                                type='checkbox' 
                                                name={brand.name}
                                                onChange={(e) => {
                                                    // will continue later
                                                    // return setFilterValue([...filterValue, e.target.name]);
                                                }}
                                                />
                                                <label id={brand.id} > {brand.name} </label>
                                            </div>
                                        );
                                    })}
                                </ItemsFilterDropdown>
                            );
                        } else {
                            return(null);
                        }
                    })()
                }
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
        showFilterDropdown: state.itemsFilter.showFilterDropdown,
        filterDropdownData: state.itemsFilter.filterDropdownData
    });
}

const mapDispatchToProps = (dispatch) => {
    return({
        toggleItemModal: (item) => {
            // toggle item modal and pass in the device item data as 'item'
            return(dispatch(toggleItemModal(item)))
        },
        toggleFilterDropdown: (data) => {
            return(dispatch(toggleFilterDropdown(data)))
        }
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(DevicePage);