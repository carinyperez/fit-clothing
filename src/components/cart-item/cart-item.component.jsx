import React from 'react'; 
import './cart-item.styles.scss';


const CartItem = ({item, quantity}) => (
    <div className='cart-item'>
        <img src={item.item.imageUrl}alt='item'/>
        <div className='item-details'></div>
            <span className='name'>{item.item.name}</span>
            <span className='price'>{item.quantity}x{item.item.price}</span>
    </div>
);  

export default CartItem; 