import { 
    DeviceItemsModalInfoContainer, ModalCustomButtonContainer,
    ModalCustomButton, TitleContainer, ItemsContainer,
    IconWrap, AddIcon, Filter, EmptyContainer, CustomButtonContainer
} from "./device-items-modal-info.styles";
import { CustomButton } from "../custom-button/custom-button.component";
import { connect } from 'react-redux/es/exports';
import { showDeviceItemsModal, showAddDeviceItemModal } from "../../redux/admin/admin.actions";
import { FaPlus } from 'react-icons/fa';
import { selectDevice } from "../../redux/directory/directory.selectors";
import DeviceModalItem from "../device-modal-item/device-modal-item.component";
import { createStructuredSelector } from "reselect";
import { SearchBox } from "../search-box/search-box.component";
import { useState, useEffect } from "react";
import { showDeviceEditModal, getCrudData } from "../../redux/admin/admin.actions";
import { selectDeviceIdToCRUDItem, selectDeviceEditData } from "../../redux/admin/admin.selectors";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase.utils";

const DeviceItemsModalInfo = ({ 
    closeDeviceItemsModal, deviceItems, showAddDeviceItemModal,
    showDeviceEditModal, getCrudData, deviceIdToDeleteItems,
    deviceEditData
}) => {
    const [searchFilterValue, setSearchFilterValue] = useState('');
    const { title, items, id, routeName } = deviceItems;

    useEffect(() => {
        getCrudData({id: id, routeName: routeName})
    }, [id, routeName, getCrudData])

    // search Filter
    const filteredItems = items.filter((item) => {
        return item.name.toLowerCase().includes(searchFilterValue.toLowerCase())
        || item.brand.toLowerCase().includes(searchFilterValue.toLowerCase())
    });
    return(
        <DeviceItemsModalInfoContainer>
            <TitleContainer> {title.toUpperCase()} </TitleContainer>
            <Filter>
                <SearchBox
                type='search'
                placeholder='Search'
                handleChange={(e) => {
                    return setSearchFilterValue(e.target.value);
                }}
                />
                <CustomButtonContainer 
                as={CustomButton}
                border='none'
                bgColor='#186f9e'
                color='#fff'
                onClick={() => {
                    showDeviceEditModal({id: id, routeName: routeName})
                }}
                >Edit</CustomButtonContainer>
                {!items.length? 
                    <CustomButtonContainer 
                    as={CustomButton}
                    border='none'
                    bgColor='#cc6447'
                    color='#fff'
                    onClick={() => {
                        // device doc reference
                        const deviceDocRef = doc(db, `sections/${deviceEditData.id}`);
                        // delete device
                        deleteDoc(deviceDocRef)
                        .then(() => {
                            // device items doc reference
                            const deviceItemsDocRef = doc(db, `sectionItems/${deviceIdToDeleteItems}`);
                            deleteDoc(deviceItemsDocRef);
                            alert('Device Deleted!');
                            closeDeviceItemsModal();
                        })
                        .catch((error) => {
                            alert(`Error! Device Deletion Failed: ${error}`)
                        })
                    }}
                    >Delete</CustomButtonContainer>
                : null
                }
            </Filter>
            <ItemsContainer>
                {filteredItems.length? filteredItems.map((item) => {
                    return <DeviceModalItem key={item.id} item={item} deviceId={id} routeName={routeName} />
                }) : <EmptyContainer>No items</EmptyContainer>}
            </ItemsContainer>
            <ModalCustomButtonContainer>
                <IconWrap>
                    <AddIcon as={FaPlus} onClick={() => {
                        showAddDeviceItemModal({id: id, routeName: routeName})
                    }} />
                </IconWrap>
                <ModalCustomButton as={CustomButton}
                bgColor='#f05435'
                border= 'none'
                color='#fff'
                bgColorHover='#d13111'
                onClick={closeDeviceItemsModal}
                >CLOSE</ModalCustomButton>
            </ModalCustomButtonContainer>
        </DeviceItemsModalInfoContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    deviceItems: (state, ownProps) => {return selectDevice(ownProps.deviceItemsCheck)(state)},
    deviceEditData: selectDeviceEditData,
    deviceIdToDeleteItems: selectDeviceIdToCRUDItem
})

const mapDispatchToProps = (dispatch) => {
    return({
        closeDeviceItemsModal: () => {
            return(dispatch(showDeviceItemsModal()))
        },
        showAddDeviceItemModal: (crudData) => {
            return(dispatch(showAddDeviceItemModal(crudData)))
        },
        showDeviceEditModal: (crudData) => {
            return dispatch(showDeviceEditModal(crudData))
        },
        getCrudData: (crudData) => {
            return(dispatch(getCrudData(crudData)))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceItemsModalInfo);