export function postNewUser(userDetails) {
  return fetch('/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user: userDetails})
    }).then(response =>
    response.json()
    )
  }
