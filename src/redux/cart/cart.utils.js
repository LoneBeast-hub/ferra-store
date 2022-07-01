// function to add item to cart
export const addItemToCart = (cartItems, cartItemToAdd) => {
    // check for an existing cart item
    const existingCartItem = cartItems.find((cartItem) => {
        return(cartItem.id === cartItemToAdd.id);
    })

    // if there's an existing cart item
    if(existingCartItem) {
        return cartItems.map((cartItem) => {
            return(
                // return a new object with the previous properties and a new one to show the quantity
                cartItem.id === cartItemToAdd.id? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            )
        })
    }

    // return an array with a quantity property in its object having a base value of 1
    return([...cartItems, { ...cartItemToAdd, quantity: 1 }])
}

// function to reduce/remove item from cart
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    // existing cart item
    const existingCartItem = cartItems.find((cartItem) => {
        return(cartItem.id === cartItemToRemove.id);
    })

    // if quantity of existing item is 1
    if(existingCartItem.quantity === 1) {
        // return the items that are not clicked (that id don't match)
        return cartItems.filter((cartItem) => {
            return(cartItem.id !== cartItemToRemove.id);
        })
    }

    // decrease the quantity of the current item by 1
    return(
        cartItems.map((cartItem) => {
            return(cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
        })
    );

}