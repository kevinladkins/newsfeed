import initialState from './initialState'

export default function sourcesReducer(state = initialState.sources, action) {
  switch (action.type) {
    case 'GET_SOURCES':
      return action.payload.map (source => (
        {...source, selected: false}
      ));
    case 'EDIT_SOURCES':
      const newState = state.map(source => {
        if (action.payload.includes(source.id)) {
          return Object.assign({}, source, {selected: true})
        } else {
          return Object.assign({}, source, {selected: false})
        }
      })
      return newState
    default:
      return state;
  }
}
