import React from 'react'; 
import {Mutation} from 'react-apollo'; 
import {gql} from 'apollo-boost'; 
import CartIcon from './cart-icon.comoponent'; 
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`

const CartIconContainer = () => {
    return (
        <Mutation mutation={TOGGLE_CART_HIDDEN}>
        {
            togggleCartHidden => <CartIcon toggleCartHidden={toggleCartHidden}/>
        }
        </Mutation>
    )
};

export default CartIconContainer; 