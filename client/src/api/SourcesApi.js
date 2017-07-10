export function fetchSources() {
  return fetch('https://newsapi.org/v1/sources?language=en&country=us')
  .then(res => {return res.json()})
  .catch(error => {
   throw(error);
  });
}


export function saveSources(user_id, source_ids) {
  return fetch(`/users/${user_id}`, {method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'AUTHORIZATION': `Bearer: ${sessionStorage.jwt}`
  },
  body: JSON.stringify({user:
      {sources: source_ids}
    })
  }).then(response => response.json())
  .catch(error => {
   throw(error);
  });
}
