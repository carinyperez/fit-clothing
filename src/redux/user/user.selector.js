import {createSelector} from 'reselect';

// input selector 
const selectUser = state => state.user; 

// output selector 
export const selectCurrentUser = createSelector(
    // array of input selectors 
    [selectUser], 
    (user) => user.currentUser
)