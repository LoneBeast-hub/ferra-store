import { adminActionTypes } from "./admin.type";

const INITIAL_STATE = {
    deviceBarToggle: false,
    deviceBarToggledId: undefined,
    deviceItems: null,
    showDeviceItemsModal: false,
    deviceItemsCheck: undefined
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
        default:
            return state;
    }
}