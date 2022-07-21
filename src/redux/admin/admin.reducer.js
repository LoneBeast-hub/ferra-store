import { adminActionTypes } from "./admin.type";

const INITIAL_STATE = {
    deviceBarToggle: false,
    deviceBarToggledId: undefined,
    showDeviceItemsModal: false,
    deviceItemsCheck: undefined,
    showAddDeviceModal: false,
    showDeviceEditModal: false,
    deviceEditData: null,
    showAddDeviceItemModal: false,
    deviceIdToCRUDItem: undefined,
    deviceRouteNameToCRUDItem: undefined,
    showEditDeviceItemModal: false,
    deviceItemEditData: null,
    deviceItemId: undefined
}

export const adminReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case adminActionTypes.DEVICE_BAR_TOGGLE:
            return({
                ...state,
                deviceBarToggle: !state.deviceBarToggle,
                deviceBarToggledId: action.payload.id,
                deviceItemsCheck: action.payload.routeName
            })
        case adminActionTypes.SHOW_DEVICE_ITEMS_MODAL:
            return({
                ...state,
                showDeviceItemsModal: !state.showDeviceItemsModal
            })
        case adminActionTypes.SHOW_ADD_DEVICE_MODAL:
            return({
                ...state,
                showAddDeviceModal: !state.showAddDeviceModal
            })
        case adminActionTypes.SHOW_DEVICE_EDIT_MODAL:
            return({
                ...state,
                showDeviceEditModal: !state.showDeviceEditModal,
                deviceEditData: action.payload
            })
        case adminActionTypes.SHOW_ADD_DEVICE_ITEM_MODAL:
            return({
                ...state,
                showAddDeviceItemModal: !state.showAddDeviceItemModal,
                deviceIdToCRUDItem: action.payload.id,
                deviceRouteNameToCRUDItem: action.payload.routeName
            })
        case adminActionTypes.SHOW_EDIT_DEVICE_ITEM_MODAL:
            return({
                ...state,
                showEditDeviceItemModal: !state.showEditDeviceItemModal,
                deviceItemEditData: action.payload.item,
                deviceIdToCRUDItem: action.payload.deviceId,
                deviceRouteNameToCRUDItem: action.payload.routeName
            })
        case adminActionTypes.GET_DEVICE_ITEM_ID:
            return({
                ...state,
                deviceItemId: action.payload
            })
        default:
            return state;
    }
}