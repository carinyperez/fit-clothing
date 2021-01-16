import React from 'react';
import './App.css';
// React Router allows us to easily navigate between pages 
import {Switch, Route} from 'react-router-dom'; 
import HomePage from './pages/homepage/homepage.component'; 
import ShopPage from './pages/shop/shop.component'; 
import Header from './components/header/header.component'; 
import SignInAndSignUpPage from './pages/sign-in-and-signup/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux'; 
import {setCurrentUser} from './redux/user/user.actions';



class App extends React.Component {


  unsubscribeFromAuth = null 

  componentDidMount() {

    const {setCurrentUser} = this.props; 

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if(userRef) {
          userRef.onSnapshot(snapShot => {
           setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
            });
          });

        }
      }

      setCurrentUser(userAuth);
    });
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
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );

    }
}

const mapDispatchToProps = dispatch => ({
  // action creator object will be merged into the component's props
  // dispatch is used with user actions  
  setCurrentUser: user => dispatch(setCurrentUser(user))
}); 



export default connect(null,mapDispatchToProps)(App);
