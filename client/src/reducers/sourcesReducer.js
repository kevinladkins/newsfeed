export default function sourcesReducer(state = [], action) {
  switch (action.type) {
    case 'GET_SOURCES':
      return  action.payload
    default:
      return state;
  }
}
