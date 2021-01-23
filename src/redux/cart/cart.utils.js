export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id  ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }
    // returns an array of existing objects with the object appended to the end quantity appended 
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}