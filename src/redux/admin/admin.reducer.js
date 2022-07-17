import { adminActionTypes } from "./admin.type";

const INITIAL_STATE = {
    deviceBarToggle: false,
    deviceBarToggledId: undefined,
    deviceItems: null,
    showDeviceItemsModal: false,
    deviceItemsCheck: undefined,
    showAddDeviceModal: false,
    showDeviceEditModal: false,
    deviceEditData: null,
    showAddDeviceItemModal: false,
    deviceIdToAddItem: undefined,
    showEditDeviceItemModal: false,
    deviceItemEditData: null
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
                showDeviceItemsModal: !state.showDeviceItemsModal,
                deviceItems: action.payload
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
                deviceIdToAddItem: action.payload
            })
        case adminActionTypes.SHOW_EDIT_DEVICE_ITEM_MODAL:
            return({
                ...state,
                showEditDeviceItemModal: !state.showEditDeviceItemModal,
                deviceItemEditData: action.payload
            })
        default:
            return state;
    }
}