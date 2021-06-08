import {all, call} from 'redux-saga/effects'; 
import { cartSagas } from './cart/cart.sagas';
import { fetchCollectionsStart, shopSagas } from './shop/shop.sagas';
import {userSagas} from './user/user.sagas'; 


// calls all the sagas 
// each individual saga will run here
export default function* rootSaga() {
    yield all([
        call(shopSagas),
        // call(fetchCollectionsStart),
        call(userSagas), 
        call(cartSagas)
    ])
}