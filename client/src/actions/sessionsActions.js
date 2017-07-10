import {login} from '../api/sessionsApi'
import {updateSources} from './sourcesActions'
import Auth from '../auth/authenticator.js'

export function loginUser(userDetails, history) {
  return function(dispatch) {
    dispatch({type: 'LOGGING_IN'})
    return login(userDetails).then(response => {
      debugger
        if (response.token) {
          dispatch(
            {
              type: 'LOGGED_IN',
              payload: response.user.id
            }
          )
          dispatch(updateSources(response.sources, history));
          sessionStorage.setItem('jwt', response.token);
        }
      }).catch(error => {
        throw(error);
      });
  }
}

export function logOutUser() {
  return function(dispatch) {
    Auth.logOut()
    dispatch(
      { type: 'LOG_OUT'}
    )
  }

}
