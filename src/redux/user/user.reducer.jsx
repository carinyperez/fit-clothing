import { UserActionTypes } from "./user.types";



const INITIAL_STATE = {
    currentUser: null 
}

// reducer receives the current state and an action item, decides how to update the state and returns the new state 
// reducer is an event listener, which handles events based on the received action  
// similar to callback functions passed to array.reduce() 
// not allowed to modify state directly but makes a copy 
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        
        default: 
            return state; 
    }

}

export default userReducer; 