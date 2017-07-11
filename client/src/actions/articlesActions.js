import {fetchArticles} from '../api/articlesApi'

export function loadArticles(channel) {
  return function(dispatch) {
    return fetchArticles(channel)
      .then(response => {
        dispatch({
          type: 'GET_ARTICLES',
          payload: {
            name: channel.name,
            articles: response.articles
          }
        })
      })
      .catch(error => {
        throw(error);
       });
     }
  }
