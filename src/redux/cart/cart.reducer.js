import UserActionTypes from '../user/user.types';
import CartActionTypes from './cart.types'; 
import {addItemToCart, removeItemFromCart } from './cart.utils';
// we use reducers when we want to move our state into a global object 
// initial state is an object literal with the property hidden 
const INITIAL_STATE = {
    hidden: true, 
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN: 
        return {
            ...state, 
            hidden: !state.hidden
        }
        case CartActionTypes.TOGGLE_CART_VISIBLE: 
        return {
            ...state, 
            hidden: false
        }

        case CartActionTypes.ADD_ITEM: 
        return  {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload) 
            // cartItems: [...state.cartItems, action.payload]
        }
        case CartActionTypes.REMOVE_ITEM: 
        return  {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload) 
            // cartItems: [...state.cartItems, action.payload]
        }
        case CartActionTypes.CLEAR_ITEM_FROM_CART: 
        return  {
            ...state, 
            cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id )
        }
        // clear cart items on sign out success 
        // case UserActionTypes.SIGN_OUT_SUCCESS:
        case CartActionTypes.CLEAR_CART:  
        return {
            ...state, 
            cartItems:[]
        }
        default:
            return state;  
    }
}

export default cartReducer;

