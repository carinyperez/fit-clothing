import CartActionTypes from './cart.types'; 

// we use reducers when we want to move our state into a global object 
// initial state is an object literal with the property hidden 
const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN: 
        return {
            ...state, 
            hidden: !state.hidden
        }
        default:
            return state; 
    }
}

export default cartReducer;
