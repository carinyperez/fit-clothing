import UserActionTypes from "./user.types";

// this is an action object , an action is an event that describes something that happened in the application  
export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
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
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})


export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
}); 

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
}); 

export const signOutFailure = () => ({
    type: UserActionTypes.SIGN_OUT_FAILURE 
}); 

export const signUpStart = (userCredentials) => ({
    type: UserActionTypes.SIGN_UP_START, 
    payload: userCredentials
})


export const signUpSuccess = ({user, additionalData}) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {user, additionalData}
})

export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE, 
    payload: error
})
