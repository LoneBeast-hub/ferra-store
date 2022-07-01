import { itemsFilterActionTypes } from "./items-filter.types";

export const toggleFilterDropdown = (data) => {
    return({
        type: itemsFilterActionTypes.TOGGLE_FILTER_DROPDOWN,
        payload: data
    });
}

export const hideFilterDropdown = () => {
    return({
        type: itemsFilterActionTypes.HIDE_FILTER_DROPDOWN
    });
}