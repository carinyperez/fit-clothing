import {takeLatest, call, put} from 'redux-saga/effects'; 
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';
import ShopActionTypes from './shop.types';

// generator functions give you the ability to pause and continue the execution of a program 
// similar to async await 
// generator functions can run to completion but don't have to 
// put is similar to dispatching actions 
export function* fetchCollections() {
    // yield stops and waits 
    yield console.log('I am fired'); 
    try {
        // collection reference 
        const collectionRef = firestore.collection('collections'); 
        const snapshot = yield collectionRef.get(); 
        // data 
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot); 
        // console.log(collectionsMap);
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        // console.error(error.message)
        yield put(fetchCollectionsFailure(error.message))
    }
}

// takeEvery allows concurrent actions 
export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollections
    )
}