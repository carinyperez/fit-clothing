import React from 'react'; 
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import {connect} from 'react-redux'; 
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';


export const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length  ? (
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)) 
                :
                (
                    <span className='empty-message'></span>
                )
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton> 
    </div>
);


// const mapStateToProps = (state) => ({
//     cartItems: state 
// }); 

const mapStateToProps = state => createStructuredSelector({
    cartItems: selectCartItems
}); 

// connects cartDropDown to state using mapStateToProps
export default connect (mapStateToProps)(CartDropdown); 

