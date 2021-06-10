import React from 'react'; 
import {connect} from 'react-redux';
// import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect'; 
import { CartIconContainer,ShoppingIconContainer,ItemCountContainer } from './cart-icon.syles';

const CartIcon = (props) => {
    const {itemCount} = props; 
    const {toggleCartHidden} = props; 
    return (
    <CartIconContainer onClick={() => console.log(toggleCartHidden)}>
        <ShoppingIconContainer/>
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
    )
}; 

// action creator object will be merged into the component's props
// dispatch is used with user actions

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())

// });


// deconstructing cart from state and cartItems from car
const mapStateToProps = (state) => createStructuredSelector({
    // itemCount gets merged into our component props 
    itemCount: selectCartItemsCount
}); 

export default connect(mapStateToProps)(CartIcon); 