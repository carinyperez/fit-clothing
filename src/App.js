import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'; 
import HomePage from './pages/homepage/homepage.component'; 

const BottomsAndLeggingsPage = () => (
  <div>
    <h1>BOTTOMS AND LEGGINGS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/bottomsandleggings' component={BottomsAndLeggingsPage} />
      </Switch>
    </div>
  );
}

export default App;
