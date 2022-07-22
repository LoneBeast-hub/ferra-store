import { adminActionTypes } from "./admin.type";

export const toggleDeviceBar = (data) => {
    return({
        type: adminActionTypes.DEVICE_BAR_TOGGLE,
        payload: data
    })
}

export const showDeviceItemsModal = () => {
    return({
        type: adminActionTypes.SHOW_DEVICE_ITEMS_MODAL
    })
}

export const showAddDeviceModal = () => {
    return({
        type: adminActionTypes.SHOW_ADD_DEVICE_MODAL
    })
}

export const showDeviceEditModal = (crudData) => {
    return({
        type: adminActionTypes.SHOW_DEVICE_EDIT_MODAL,
        payload: crudData
    })
}

export const showAddDeviceItemModal = (crudData) => {
    return({
        type: adminActionTypes.SHOW_ADD_DEVICE_ITEM_MODAL,
        payload: crudData
    })
}

export const showEditDeviceItemModal = (deviceItemData) => {
    return({
        type: adminActionTypes.SHOW_EDIT_DEVICE_ITEM_MODAL,
        payload: deviceItemData
    })
}

export const getDeviceItemId = (deviceItemId) => {
    return({
        type: adminActionTypes.GET_DEVICE_ITEM_ID,
        payload: deviceItemId
    })
}

export const getDeviceTitle = (deviceTitle) => {
    return({
        type: adminActionTypes.GET_DEVICE_TITLE,
        payload: deviceTitle
    })
}

export const getDeviceData = (deviceData) => {
    return({
        type: adminActionTypes.GET_DEVICE_DATA,
        payload: deviceData
    })
}