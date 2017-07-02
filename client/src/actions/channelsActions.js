import {fetchChannels} from '../api/channelsApi'

export function getArticles(channel) {
  return function(dispatch) {
    return fetchChannels(channel)
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
