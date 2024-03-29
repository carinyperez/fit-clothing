import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'; 
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store,persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react'; 
import {ApolloProvider} from 'react-apollo'; 
// connect client to endpoint /graphql 
import {createHttpLink} from 'apollo-link-http'; 
import {InMemoryCache} from 'apollo-cache-inmemory'; 
import {ApolloClient, gql} from 'apollo-boost'; 
import { resolvers,typeDefs } from './graphql/resolvers';

const httpLink = createHttpLink({
  uri: 'https://crwn-clothing.com'
})

const cache = new InMemoryCache(); 
const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs, 
  resolvers 
})

// mutation 
client.writeData({
  data: {
    cartHidden: false, 
    cartItems: []
  }
})

// like an sql query, we are querying to a graphql backend server 
const graphQL = client.query({
  query: gql`
  {
    getCollectionsByTitle(title: "hats") {
      id 
      title
      items {
        id
        name 
        price 
        imageUrl
      }
    }
  }
  `
})
console.log(graphQL); 

ReactDOM.render(
  //Makes the redux store available to any nested components that have been wrapped in the connect function
  // the redux application state lives in an object called the store 
  // the store is created by passing in a reducer
  // getState is current state value 
  // dispach to update state 
  // the store stores the global state 
  // A Redux store is created using a root reducer function
  <ApolloProvider client={client}> 
    <Provider store={store}> 
        {/* Browser router renders components based on the route, imported from react-router-dom*/}
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
