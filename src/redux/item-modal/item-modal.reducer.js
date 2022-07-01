import { itemModalActionTypes} from "./item-modal.type";

const INITIAL_STATE = {
    modalVisibility: false,
    modalData: null
}

export const itemModalReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        // on toggle
        case itemModalActionTypes.TOGGLE_ITEM_MODAL:
            return({
                // don't mess with the rest of the state
                ...state,
                // change visibility
                modalVisibility: !state.modalVisibility,
                // set modal data
                modalData: action.payload
            })
        default:
            return state;
    }
}