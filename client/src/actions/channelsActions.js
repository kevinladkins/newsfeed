import {fetchChannels} from '../api/channelsApi'

export function getArticles(channel) {
  return function() {
    return fetchChannels(channel)
      .then(response => {response.articles})
      .catch(error => {
        throw(error);
       });
     }
  }
