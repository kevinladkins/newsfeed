import {fetchChannels} from '../api/channelsApi'

export function getArticles(channel) {
  return function(dispatch) {
    return fetchChannels(channel)
      .then(response => {
        dispatch({
          type: 'GET_ARTICLES',
          payload: {
            title: channel.name,
            articles: response.articles
          }
        })

      })
      .catch(error => {
        throw(error);
       });
     }
  }
