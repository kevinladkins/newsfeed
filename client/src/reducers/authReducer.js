import initialState from './initialState'



export default function authReducer(state = initialState.auth, action) {
  switch(action.type) {
    case 'LOGGING_IN':
      return Object.assign({}, state, {isAuthenticating: true})
    case 'LOGGED_IN':
      return {
        isAuthenticating:false,
        isAuthenticated: true,
        user_id: action.payload
      }
    default:
      return state
  }
}
