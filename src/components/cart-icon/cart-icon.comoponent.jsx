import React from 'react'; 
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart.svg';
import './cart-icon.styles.scss'; 
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
); 

// action creator object will be merged into the component's props
// dispatch is used with user actions

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())

});


// deconstructing cart from state and cartItems from car
const mapStateToProps = (state) => ({
    // itemCount gets merged into our component props 
    itemCount: selectCartItemsCount(state)
}); 

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon); 