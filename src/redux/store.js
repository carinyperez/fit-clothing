import {createStore, applyMiddleware} from 'redux'; 
import logger from 'redux-logger'; 
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './root-saga';

// import thunk from 'redux-thunk';
// replacing thunk with sagas to handle async actions inside redux 
import createSagaMiddleware from 'redux-saga'; 

// import shop saga 
import {fetchCollectionsStart} from './shop/shop.sagas'; 



const sagaMiddleware = createSagaMiddleware(); 
// const middlewares = [thunk]; 
const middlewares = [sagaMiddleware]; 


if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger); 
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares))); 

// run root saga  
sagaMiddleware.run(rootSaga);


const persistor = persistStore(store); 

export {store, persistor}; 