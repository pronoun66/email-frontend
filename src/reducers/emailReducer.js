import {SEND_EMAIL, CHANGE_EMAIL_FIELD} from '../constants/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function emailReducer(state = initialState.email, action) {
  switch (action.type) {
    case SEND_EMAIL:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return {...state, isEmailSent: action.isEmailSent, hasEmailSentError: action.hasEmailSentError};
    case CHANGE_EMAIL_FIELD:
      return {...state, [action.fieldName]: action.value};
    default:
      return state;
  }
}
