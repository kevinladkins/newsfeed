import {login} from '../api/sessionsApi'
import {updateSources} from './sourcesActions'

export function loginUser(userDetails, history) {
  return function(dispatch) {
    return login(userDetails).then(response => {
        if (response.token) {
          sessionStorage.setItem('jwt', response.token);
          dispatch(updateSources(response.sources));
        }
      }).catch(error => {
        throw(error);
      });
  }
}
