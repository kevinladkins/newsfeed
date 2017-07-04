import initialState from './initialState'

export default function sourcesReducer(state = initialState.sources, action) {
  switch (action.type) {
    case 'GET_SOURCES':
      return action.payload.map (source => (
        {...source, selected: false}
      ))
    default:
      return state;
  }
}
