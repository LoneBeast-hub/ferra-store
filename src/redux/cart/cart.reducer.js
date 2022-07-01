import { cartActionTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hideCartDropdown: true,
    cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        // toggle cart dropdown state
        case cartActionTypes.TOGGLE_CART_DROPDOWN:
            return({
                ...state,
                hideCartDropdown: !state.hideCartDropdown
            });
        // add cart item state
        case cartActionTypes.ADD_ITEM:
            return({
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            });
        // clear item from cart if the id from action payload is the same with the one in state
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return({
                ...state,
                cartItems: state.cartItems.filter((cartItem) => {
                    return(cartItem.id !== action.payload.id)
                })
            });
        // Reduce/remove cart item
        case cartActionTypes.REMOVE_ITEM:
            return({
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            });
        // clear cart item
        case cartActionTypes.CLEAR_CART:
            return({
                ...state,
                cartItems: []
            });
        default:
            return state;
    }
}