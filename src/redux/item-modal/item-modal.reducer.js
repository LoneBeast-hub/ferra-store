import { itemModalActionTypes} from "./item-modal.type";

const INITIAL_STATE = {
    modalVisibility: false,
    modalData: null
}

export const itemModalReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case itemModalActionTypes.TOGGLE_ITEM_MODAL:
            return({
                ...state,
                modalVisibility: !state.modalVisibility,
                modalData: action.payload
            })
        default:
            return state;
    }
}