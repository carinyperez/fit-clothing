import React from 'react'; 
import {ReactComponent as Logo} from '../../assets/wellness-logo.svg'; 
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux'; 
import CartIcon from '../cart-icon/cart-icon.comoponent';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect'; 
import { selectCartHidden} from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import {HeaderContainer, OptionsContainer, LogoContainer,OptionLink} from './header.styles'; 


// function reference named header that takes props and returns a component 
const Header = ({currentUser, hidden}) => (
      <HeaderContainer>
        {/*Adds clickable links to the site */}
        <LogoContainer to='/'>
          <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
              {currentUser ? (
                  <OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                  </OptionLink>    
                ) : (
                  <OptionLink to='/signin'>
                      SIGN IN
                  </OptionLink>
                )} 
              <CartIcon/> 
        </OptionsContainer>
        {hidden ? null : <CartDropdown/>}
    </HeaderContainer>
)

const mapStateToProps = (state) => createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
}); 

export default connect(mapStateToProps)(Header);  