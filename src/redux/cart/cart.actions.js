import CartActionTypes from './cart.types'; 

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const toggleCartVisible = () => ({
    type: CartActionTypes.TOGGLE_CART_VISIBLE
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM, 
    payload: item 
})

