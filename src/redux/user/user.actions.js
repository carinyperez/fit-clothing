// this is an action object , an action is an event that describes something that happened in the application  

// named exports useful when exporting several values but must use {} to import 
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER', // descriptive name 
    payload: user // data
});

 
