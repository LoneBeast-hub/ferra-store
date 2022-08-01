import { createSelector } from "reselect";

// input selector
const selectUser = (state) => {
    return(state.user);
}

// select current User output selector
export const selectCurrentUser = createSelector([selectUser], (user) => {
    return(user.currentUser);
})

// select admin id
export const selectAdminId = createSelector([selectUser], (user) => {
    return(user.adminId);
})

// select currentUserId
export const selectCurrentUserId = createSelector([selectCurrentUser], (currentUser) => {
    return(currentUser? currentUser.id : null);
})