import React from 'react'; 
import './checkout-item.styles.scss'; 
import {connect} from 'react-redux'; 
import { clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem; 
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='subtract' onClick={() => removeItem(cartItem)}>-</div>
            <span className='value'>{quantity}</span>
            <div className='add' onClick={() => addItem(cartItem)}>+</div>
        </span>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)), 
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})


// connects the props to our component and our store so we can call cart reducer 
export default connect(null,mapDispatchToProps)(CheckoutItem); 