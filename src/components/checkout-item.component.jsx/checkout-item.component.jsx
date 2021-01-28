import React from 'react'; 
import {connect} from 'react-redux'; 
import { clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';
import { CheckOutItemContainer, ImageContainerContainer, ImageContainer,TextContainer,QuantityContainer,removeButtonContainer } from './checkout-item.styles';



const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem; 
    return (
    <CheckOutItemContainer>
        <ImageContainerContainer>
            <ImageContainer src={imageUrl} alt='item'/>
        </ImageContainerContainer>
        <TextContainer >{name}</TextContainer>
        <QuantityContainer>
            <div onClick={() => removeItem(cartItem)}>-</div>
            <span>{quantity}</span>
            <div onClick={() => addItem(cartItem)}>+</div>
        </QuantityContainer>
        <TextContainer>${price}</TextContainer>
        <removeButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</removeButtonContainer>
    </CheckOutItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)), 
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})


// connects the props to our component and our store so we can call cart reducer 
export default connect(null,mapDispatchToProps)(CheckoutItem); 