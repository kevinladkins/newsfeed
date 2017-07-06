import {postNewUser} from '../api/usersApi'

export function createUser(userDetails) {
  return function(dispatch) {
    return postNewUser(userDetails).then(response => {
        if (response.token) {
          sessionStorage.setItem('jwt', response.token);
        }
      }).catch(error => {
        throw(error);
      });
  }
}
