class Auth {
  static LoggedIn() {
    return !!sessionStorage.jwt
  }

  static logOut() {
    sessionStorage.removeItem('jwt');
  }

}

export default Auth
