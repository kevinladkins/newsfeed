import apiKey from './apiKey'

export function fetchArticles(channel) {
  const source = channel.source_id
  return fetch(`https://newsapi.org/v1/articles?source=${source}&apiKey=${apiKey}`)
  .then(res => {
    return res.json()
    }
  )
}
