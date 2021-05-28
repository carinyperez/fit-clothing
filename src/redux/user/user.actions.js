import UserActionTypes from "./user.types";


// this is an action object , an action is an event that describes something that happened in the application  

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START, 
})

export const googleSignInSuccess = user => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user 
})

export const googleSignInFailure = error => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error 
})

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START, 
    payload: emailAndPassword
})

export const emailSignInSuccess = user => ({
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: user 
})

export const emailSignInFailure = error => ({
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error 
})
