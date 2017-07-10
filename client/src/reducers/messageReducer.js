import initialState from './initialState'



export default function messageReducer(state = initialState.message, action) {
  switch(action.type) {
    case 'LOGGING_IN':
      return "Logging in...";
    case 'LOGGED_IN':
      return initialState.message;
    case 'LOGIN_ERROR':
      return action.payload.join(" ; ");
    case 'CREATING_USER':
      return "Creating account...";
    case 'SIGNUP_ERROR':
      return action.payload.join(" ; ");
    default:
      return state
  }
}
