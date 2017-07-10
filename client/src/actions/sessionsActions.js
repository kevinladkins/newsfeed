import {login} from '../api/sessionsApi'
import {updateSources} from './sourcesActions'

export const loggingIn = () => {
  return {type: 'LOGGING_IN'}
}

export const loggedIn = (response) => {
  return {
    type: 'LOGGED_IN',
    payload: response.user.id
  }
}

export const loginError = (response) => {
  return {
    type: 'LOGIN_ERROR',
    payload: response.errors
  }
}

export const logOut = () => {
   return {type: 'LOG_OUT'}
}

export function loginUser(userDetails, history) {
  return function(dispatch) {
    dispatch(loggingIn())
    return login(userDetails).then(response => {
        if (response.token) {
          dispatch(loggedIn(response));
          dispatch(updateSources(response.sources, history));
          sessionStorage.setItem('jwt', response.token);
        } else {
          dispatch(loginError(response));
        }
      }).catch(error => {
        throw(error);
      });
  }
}


export function logOutUser() {
  return function(dispatch) {
    sessionStorage.removeItem('jwt')
    dispatch(logOut());
  }
}
