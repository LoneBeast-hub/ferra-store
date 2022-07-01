import { createSelector } from "reselect";

// input selector
const selectCart = (state) => {
    return(state.cart);
}

// output selector to select cartdropdown boolean state
export const selectHideCartDropdown = createSelector([selectCart], (cart) => {
    return(cart.hideCartDropdown);
})

// output selector for cart Items
export const selectCartItems = createSelector([selectCart], (cart) => {
    return(cart.cartItems);
})  

// output selector for cartItemsCount
export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => {
    return(
        // return reduce value of all quantities in the cartItems
        cartItems.reduce((accumulatedQuantity, cartItem) => {
            return(accumulatedQuantity + cartItem.quantity)
        }, 0)
    )
})

// output selector for cartTotal cost
export const selectCartTotal = createSelector([selectCartItems], (cartItems) => {
    return(
        // return reduce value for total cost of the cart items
        cartItems.reduce((accumulatedQuantity, cartItem) => {
            return(accumulatedQuantity + (cartItem.quantity * cartItem.price))
        }, 0)
    )
})