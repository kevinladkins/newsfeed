import {postNewUser} from '../api/usersApi'

export function createUser(userDetails, history) {
  return function(dispatch) {
    dispatch({type: 'LOGGING_IN'})
    return postNewUser(userDetails).then(response => {
        if (response.token) {
          sessionStorage.setItem('jwt', response.token);
          dispatch(
            {
              type: 'LOGGED_IN',
              payload: response.user.id
            }
          );
          history.push('/newsfeed')
        }
      }).catch(error => {
        throw(error);
      });
  }
}
