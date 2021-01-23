import { addItem } from './cart.actions';
import CartActionTypes from './cart.types'; 
import {addItemToCart} from './cart.utils'; 
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


        default:
            return state;

    }
}

export default cartReducer;

