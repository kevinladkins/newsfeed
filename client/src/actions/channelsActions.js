import {fetchChannels} from '../api/channelsApi'

export function getArticles(channel) {
  return function(dispatch) {
    dispatch({
      type: 'LOADING_ARTICLES',
      payload: {
        name: channel.name,
        articles: []
      }
    })
    return fetchChannels(channel)
      .then(response => {
        dispatch({
          type: 'GET_ARTICLES',
          payload: {
            name: channel.name,
            articles: response.articles
          }
        })
      return response.articles
      })
      .catch(error => {
        throw(error);
       });
     }
  }
