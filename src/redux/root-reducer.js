import {combineReducers} from 'redux'; 
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'; 
import {persistReducer} from 'redux-persist';
// use local storage as default, can also use sessionStorage
import storage from 'redux-persist/lib/storage'
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    // array of reducers to persist  
    whitelist: ['cart']
}

const rootReducer =  combineReducers({
    // handled by firebase 
    user: userReducer,
    cart: cartReducer, 
    directory: directoryReducer,
    shop: shopReducer 
})

// root reducer with persist capabilities 
export default persistReducer(persistConfig, rootReducer); 