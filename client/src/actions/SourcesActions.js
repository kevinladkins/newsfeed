import {fetchSources, saveSources} from '../api/SourcesApi'

export function getSources() {
  return function(dispatch) {
    return fetchSources()
      .then(response => {
          dispatch({
            type: 'GET_SOURCES',
            payload: response.sources
          })
       }).catch(error => {
        throw(error);
       });
     }
  }

  export function updateSources(selectedSources, history, user_id) {
     return function(dispatch) {
       saveSources(user_id, selectedSources);
       dispatch({
         type: 'EDIT_SOURCES',
         payload: selectedSources
       });
       history.push("/newsfeed")
     }
  }
