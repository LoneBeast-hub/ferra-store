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