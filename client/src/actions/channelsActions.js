import {fetchChannels} from '../api/SourcesApi'

export function getArticles(channel) {
  return function() {
    return fetchChannels(channel)
      .then(response => {response.articles})
       }).catch(error => {
        throw(error);
       });
     }
  }
