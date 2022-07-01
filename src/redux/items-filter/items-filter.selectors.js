import { createSelector } from "reselect";

// input selector
const selectItemsFilter = (state) => {
    return(state.itemsFilter);
}

// output selectors
export const selectShowFilterDropdown = createSelector([selectItemsFilter], (itemsFilter) => {
    return(itemsFilter.showFilterDropdown);
})