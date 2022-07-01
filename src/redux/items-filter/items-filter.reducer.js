import { itemsFilterActionTypes } from './items-filter.types';

const INITIAL_STATE = {
    showFilterDropdown: false,
    filterDropdownData: null
}

export const itemsFilterReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case itemsFilterActionTypes.TOGGLE_FILTER_DROPDOWN:
            return({
                ...state,
                showFilterDropdown: !state.showFilterDropdown,
                filterDropdownData: action.payload
            });
        // hide dropdown asap
        case itemsFilterActionTypes.HIDE_FILTER_DROPDOWN:
            return({
                ...state,
                showFilterDropdown: false
            })
        default:
            return state;
    }
}