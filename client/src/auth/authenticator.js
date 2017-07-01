class Auth {
  static loggedIn() {
    return !!sessionStorage.jwt
  }

  static logOut() {
    sessionStorage.removeItem('jwt');
  }

}

var token =  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.VmW_PVc2ONzo6vmvWIae2ID6VJnSszKjiwXaKQEySMA"

export default Auth
