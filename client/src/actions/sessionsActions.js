import {login} from '../api/sessionsApi'
import {updateSources} from './sourcesActions'

export function loginUser(userDetails, history) {
  return function(dispatch) {
    dispatch({type: 'LOGGING_IN'})
    return login(userDetails).then(response => {
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
