import { itemModalActionTypes } from "./item-modal.type";

export const toggleItemModal = (item) => {
    return({
        type: itemModalActionTypes.TOGGLE_ITEM_MODAL,
        payload: item
    })
}