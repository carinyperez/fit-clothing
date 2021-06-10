import React from 'react'; 
import {connect} from 'react-redux'; 
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import { CartDropdownContainer,CartItemsContainer, EmptyMessageContainer,CustomButtonContainer  } from './cart-dropdown.styles'; 

export const CartDropdown = (props) => {
    const {cartItems, history} = props; 
    return (
        <CartDropdownContainer>
        <CartItemsContainer>
        {
            cartItems.length  ? (
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)) 
            :
            (
                <EmptyMessageContainer>
                Your cart is empty
                </EmptyMessageContainer> 
            )
        }
        </CartItemsContainer>
    <CustomButtonContainer onClick={() =>  
        {
            history.push('/checkout'); 
            this.props.toggleCartHidden();
        }}
        >GO TO CHECKOUT</CustomButtonContainer>
</CartDropdownContainer> 

)
};



const mapStateToProps = state => createStructuredSelector({
    cartItems: selectCartItems
}); 

export default withRouter(connect(mapStateToProps)(CartDropdown)); 

