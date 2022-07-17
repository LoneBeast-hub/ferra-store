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

export const selectShowAddDeviceModal = createSelector([selectAdmin], (admin) => {
    return admin.showAddDeviceModal
})

export const selectShowDeviceEditModal = createSelector([selectAdmin], (admin) => {
    return admin.showDeviceEditModal
})

export const selectDeviceEditData = createSelector([selectAdmin], (admin) => {
    return admin.deviceEditData
})

export const selectShowAddDeviceItemModal = createSelector([selectAdmin], (admin) => {
    return admin.showAddDeviceItemModal
})

export const selectShowEditDeviceItemModal = createSelector([selectAdmin], (admin) => {
    return admin.showEditDeviceItemModal
})