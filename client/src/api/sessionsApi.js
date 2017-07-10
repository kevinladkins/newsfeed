
export function login(userDetails) {
    return fetch('/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: userDetails})
    }).then(response =>
      response.json()
    ).catch(error => {
     throw(error);
    });
}
