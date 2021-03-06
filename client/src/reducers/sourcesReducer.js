import initialState from './initialState'

export default function sourcesReducer(state = initialState.sources, action) {
  switch (action.type) {
    case 'GET_SOURCES':
      return action.payload.map (source => (
        {...source, selected: false, source_id: source.id}
      ));
    case 'EDIT_SOURCES':
      var newState = state.map(source => {
        if (action.payload.includes(source.id)) {
          return Object.assign({}, source, {selected: true})
        } else {
          return Object.assign({}, source, {selected: false})
        }
      });
      return newState
    case 'LOG_OUT':
      return state.map(source => {
        return Object.assign({}, source, {selected: false})
      });
    default:
      return state;
  }
}
