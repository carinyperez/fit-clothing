import React from 'react'; 
import './header.styles.scss'; 
import {Link} from 'react-router-dom'; 
import {ReactComponent as Logo} from '../../assets/wellness-logo.svg'; 

// function reference named header that takes props and returns a component 
const Header = () => (
    <div className='header'>
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
        </div>
    </div>
)

export default Header; 