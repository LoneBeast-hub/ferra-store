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

export const selectDeviceRouteNameToCRUDItem = createSelector([selectAdmin], (admin) => {
    return admin.deviceRouteNameToCRUDItem
})

export const selectDeviceIdToCRUDItem = createSelector([selectAdmin], (admin) => {
    return admin.deviceIdToCRUDItem
})

export const selectDeviceItemEditData = createSelector([selectAdmin], (admin) => {
    return admin.deviceItemEditData
})

export const selectDeviceItemId = createSelector([selectAdmin], (admin) => {
    return admin.deviceItemId
})

export const selectDeviceTitle = createSelector([selectAdmin], (admin) => {
    return admin.deviceTitle
})