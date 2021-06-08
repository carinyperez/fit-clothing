import React from 'react';
import './App.css';
// React Router allows us to easily navigate between pages 
import {Switch, Route, Redirect} from 'react-router-dom'; 
import HomePage from './pages/homepage/homepage.component'; 
import ShopPage from './pages/shop/shop.component'; 
import Header from './components/header/header.component'; 
import SignInAndSignUpPage from './pages/sign-in-and-signup/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import {connect} from 'react-redux'; 
import { selectCurrentUser } from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect'; 
import CheckoutPage from './pages/checkout/checkout.component';
import {checkUserSession} from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null 
  componentDidMount() {
    const {checkUserSession} = this.props; 
    checkUserSession(); 
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth(); 
  }

  render() {
    return (
      <div>
        <Header/>
        {/* Switch ensures only one component is rendered at a time */}
        <Switch>
          {/* Route says which component to load on which path*/}
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' 
          render= {() => this.props.currentUser ? (<Redirect to='/'/>) :
          (<SignInAndSignUpPage/>)}
          />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
    }
}


const mapStateToProps = (state) => createStructuredSelector({
  currentUser: selectCurrentUser,
}); 

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})


export default connect(
  mapStateToProps, mapDispatchToProps)(App);
