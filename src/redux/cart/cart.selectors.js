import {createSelector} from 'reselect'; 

// input selector: function that gets the whole state and returns a slice., reselect is not needed  
// output selector, needs reselect 
/*
{
    user: {…}, 
    cart: {
        {hidden: false, 
        cartItems: []
        }
    }
}
*/


const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
); 

export const selectCartHidden = createSelector (
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce (
        (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity, 0 
    )
);



