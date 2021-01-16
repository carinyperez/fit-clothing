import React from 'react'; 
import './header.styles.scss'; 
import {Link} from 'react-router-dom'; 
import {ReactComponent as Logo} from '../../assets/wellness-logo.svg'; 
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux'; 


// function reference named header that takes props and returns a component 
const Header = ({currentUser}) => (
    <div className='header'>
        {/*Adds clickable links to the site */}
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
                {currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>
                      SIGN OUT
                    </div>
                  ) : (
                    <Link className='option' to='/signin'>
                      SIGN IN
                    </Link>
                  )}   
        </div>
    </div>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(Header);  