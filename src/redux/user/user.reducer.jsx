import UserActionTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null, 
    error: null
}

// reducer receives the current state and an action item, decides how to update the state and returns the new state 
// reducer is an event listener, which handles events based on the received action  
// similar to callback functions passed to array.reduce() 
// not allowed to modify state directly but makes a copy 
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null 
            }
        case UserActionTypes.SIGN_OUT_SUCCESS: 
            return {
                ...state, 
                currentUser: null,
                error: null
            }
        case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
        case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state; 
    }

}

export default userReducer; 