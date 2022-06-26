import { createSelector } from 'reselect';

// input selector
const selectItemModal = (state) => {
    return(state.itemModal);
}

// output selectors
export const selectModalVisibility = createSelector([selectItemModal], (itemModal) => {
    return(itemModal.modalVisibility);
})