import {all, call} from 'redux-saga/effects'; 
import { fetchCollectionsStart } from './shop/shop.sagas';

// calls all the sagas 
// each individual saga will run here
export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart)
    ])
}