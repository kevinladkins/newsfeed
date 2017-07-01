export function fetchSources() {
  return fetch('https://newsapi.org/v1/sources?language=en&country=us')
  .then(res => {
    return res.json()
    }
  )
}
