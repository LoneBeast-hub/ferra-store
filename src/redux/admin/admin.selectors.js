import { createSelector } from "reselect";

// input selector
const selectAdmin = (state) => {
    return state.admin
}

// output selectors
export const selectDeviceBarToggle = createSelector([selectAdmin], (admin) => {
    return admin.deviceBarToggle
})

export const selectDeviceBarToggledId = createSelector([selectAdmin], (admin) => {
    return admin.deviceBarToggledId
})

export const selectDeviceItems = createSelector([selectAdmin], (admin) => {
    return admin.deviceItems
})

export const selectShowDeviceItemsModal = createSelector([selectAdmin], (admin) => {
    return admin.showDeviceItemsModal
})

export const selectDeviceItemsCheck = createSelector([selectAdmin], (admin) => {
    return admin.deviceItemsCheck
})