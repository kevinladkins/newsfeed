import {fetchSources, saveSources} from '../api/SourcesApi'

export const getSources = (response) => {
  return {
    type: 'GET_SOURCES',
    payload: response.sources
  }
}

export const editSources = (selectedSources) => {
  return {
    type: 'EDIT_SOURCES',
    payload: selectedSources
  }
}

export function loadSources() {
  return function(dispatch) {
    return fetchSources()
      .then(response => {
          dispatch(getSources(response))
       }).catch(error => {
        throw(error);
       });
     }
  }

  export function updateSources(selectedSources, history, user_id) {
     return function(dispatch) {
       saveSources(user_id, selectedSources);
       dispatch(editSources(selectedSources));
       history.push("/newsfeed")
     }
  }
