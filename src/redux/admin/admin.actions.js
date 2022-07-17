import { adminActionTypes } from "./admin.type";

export const toggleDeviceBar = (data) => {
    return({
        type: adminActionTypes.DEVICE_BAR_TOGGLE,
        payload: data
    })
}

export const showDeviceItemsModal = (items) => {
    return({
        type: adminActionTypes.SHOW_DEVICE_ITEMS_MODAL,
        payload: items
    })
}

export const showAddDeviceModal = () => {
    return({
        type: adminActionTypes.SHOW_ADD_DEVICE_MODAL
    })
}

export const showDeviceEditModal = (deviceData) => {
    return({
        type: adminActionTypes.SHOW_DEVICE_EDIT_MODAL,
        payload: deviceData
    })
}

export const showAddDeviceItemModal = (deviceId) => {
    return({
        type: adminActionTypes.SHOW_ADD_DEVICE_ITEM_MODAL,
        payload: deviceId
    })
}

export const showEditDeviceItemModal = (deviceItemData) => {
    return({
        type: adminActionTypes.SHOW_EDIT_DEVICE_ITEM_MODAL,
        payload: deviceItemData
    })
}