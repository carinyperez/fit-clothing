import {takeLatest, put, all, call} from 'redux-saga/effects'; 
import UserActionTypes from './user.types';
import {auth, googleProvider, createUserProfileDocument,
     getCurrentUser} from '../../firebase/firebase.utils'; 
import { googleSignInSuccess, googleSignInFailure, 
    emailSignInSuccess, emailSignInFailure, 
    signOutSuccess, signOutFailure, signUpSuccess,signUpFailure} from './user.actions';

export function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth); 
        const userSnapshot = yield userRef.get(); 
        yield put(googleSignInSuccess({id:userSnapshot.id, ...userSnapshot.data}))
    } catch (error) {
        yield put(emailSignInFailure(error))
    }
}

export function* signInWithGoogle() {
    // any code that can fail needs error handling 
    console.log('sign in with google');
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user); 
        //    const userRef = yield call(createUserProfileDocument, user);
        //    console.log(userRef);
        //    const userSnapshot = yield userRef.get();
        // puts things back into our redux flow 
    } catch (error) {
        console.log(error);
        yield put(googleSignInFailure(error));    
    }
}


export function* signUp({payload: {email, password, displayName}}) {
    // {email: "cariny55@gmail.com", password: "123456", displayName: "cariny5"}
   try {
     const {user} = yield auth.createUserWithEmailAndPassword(email,password);
     yield put(signUpSuccess({user, additionalData: { displayName}}))
   } catch (error) {
      yield put(signUpFailure(error)); 
   }
    // try {
        //     const {user} = 
        //await auth.createUserWithEmailAndPassword(email, password); 
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

export function* signInAfterSignUp({payload: {user, additionalData}}) {
    console.log(user, additionalData); 
    yield createUserProfileDocument(user, additionalData); 
}

// yield is similar to await 
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

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        console.log(userAuth);
        if(!userAuth) return; 
        yield getSnapshotFromUserAuth(userAuth); 
    } catch (error) {
        yield put(emailSignInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signOut() {
    try { 
        // firebase method 
        yield auth.signOut();
        yield (put(signOutSuccess())) 
    } catch(error) {
        yield put(signOutFailure())
    }
}

// listens for EMAIL_SIGN_IN_START from user.actions
export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail); 
}

//listens for checkUserSession from user.actions 
export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
    yield all(
        [
            call(onGoogleSignInStart),
            call(onEmailSignInStart), 
            call(onCheckUserSession),
            call(onSignOutStart),
            call(onSignUpStart),
            call(onSignUpSuccess)
        ]
        )
}