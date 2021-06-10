import React from 'react'; 
import {ReactComponent as Logo} from '../../assets/wellness-logo.svg'; 
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux'; 
import {default as CartIcon} from '../cart-icon/cart-icon.container';
import {default as CartDropdown} from '../cart-dropdown/cart-dropdown.container';
import {createStructuredSelector} from 'reselect'; 
import { selectCurrentUser } from '../../redux/user/user.selector';
import {HeaderContainer, OptionsContainer, LogoContainer,OptionLink} from './header.styles'; 
import { signOutStart } from '../../redux/user/user.actions';

// function reference named header that takes props and returns a component 
const Header = ({currentUser, hidden, signOutStart}) => (
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
                  <OptionLink as='div' onClick={signOutStart}>
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
}); 

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);  