import React from 'react'; 
import {Query, Mutation} from 'react-apollo'; 
import {gql} from 'apollo-boost'; 
import CartDropdown from './cart-dropdown.component';


const TOGGLE_CART_HIDDEN = gql`
    mutation ToggleCartHidden {
        toggleCartHidden @client
    }
`

// query 
const GET_CART_ITEMS = gql`
    {
        cartItems @client 
    }
`


const CartDropDownContainer = () => {
    return (
        <Mutation mutation={TOGGLE_CART_HIDDEN}>
        {
            toggleCartHidden => (
                <Query query={GET_CART_ITEMS}> 
                {
                // (cartItems) => <CartDropdown cartItems={cartItems.data.cartItems}/>
                ({data : {cartItems}}) => (
                    <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden}/>
                )
        }   
        </Query>
            )

        }
        </Mutation> 
    )
}

export default CartDropDownContainer; 