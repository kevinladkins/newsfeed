import {postNewUser} from '../api/usersApi'
import {loggedIn} from './sessionsActions'

export const creatingUser = () => {
  return {type: 'CREATING_USER'}
}

export const signupError = (response) => {
  return {
    type: 'SIGNUP_ERROR',
    payload: response.errors
  }
}

export function createUser(userDetails, history) {
  return function(dispatch) {
    dispatch(creatingUser())
    return postNewUser(userDetails).then(response => {
        if (response.token) {
          sessionStorage.setItem('jwt', response.token);
          dispatch(loggedIn(response));
          history.push('/newsfeed')
        } else {
          dispatch(signupError(response));
        }
      }).catch(error => {
        throw(error);
      });
  }
}
