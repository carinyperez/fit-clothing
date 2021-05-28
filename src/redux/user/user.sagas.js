import {takeLatest, put, all, call} from 'redux-saga/effects'; 
import UserActionTypes from './user.types';
import {auth, googleProvider, createUserProfileDocument} from '../../firebase/firebase.utils'; 
import { googleSignInSuccess, googleSignInFailure, emailSignInSuccess, emailSignInFailure} from './user.actions';

export function* signInWithGoogle() {
    // any code that can fail needs error handling 
    try {
       const {user} = yield auth.signInWithPopup(googleProvider);
       const userRef = yield call(createUserProfileDocument, user);
       console.log(userRef);
       const userSnapshot = yield userRef.get();
       // puts things back into our redux flow 
       yield put(
        googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
       ) 
    } catch (error) {
        yield put(googleSignInFailure(error))    
    }
}

// sagas are similar to await 
//{type: "EMAIL_SIGN_IN_START", payload: {…}}
export function* signInWithEmail({payload}) {
    try {
    const {user} = yield auth.signInWithEmailAndPassword(payload.email, payload.password); 
    // saga will not continue until call finishes 
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get(); 
    // puts saga back into redux flow
    yield put(
        emailSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
    )  
    } catch (error) {
        yield put (
            emailSignInFailure(error)
        )

    }
    //   try {
    //     const {user} = await auth.createUserWithEmailAndPassword(email, password); 
    //     await createUserProfileDocument(user, {displayName}); 
    //     this.setState({
    //         displayName: '',
    //         email: '',
    //         password: '', 
    //         confirmPassword: ''
    //     }); 
    // } catch(error) {
    //     console.error(error); 
    // }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

// listens for EMAIL_SIGN_IN_START from user.actions
export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail); 
}

export function* userSagas() {
    yield all(
        [
            call(onGoogleSignInStart),
            call(onEmailSignInStart)
        ]
        )
}