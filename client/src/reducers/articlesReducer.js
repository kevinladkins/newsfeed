import initialState from './initialState'



export default function articlesReducer(state = initialState.articles, action) {
  switch(action.type) {
    case 'GET_SOURCES':
      return action.payload.map(source => {
        return {name: source.name, articles: []}
      })
    case 'GET_ARTICLES':
      if (state.find(element => element.name === action.payload.name)) {
        const source = state.find(element => element.name === action.payload.name);
        const sourceIndex = state.indexOf(source);
        const newState = [...state];
        newState[sourceIndex] = action.payload;
        return newState
      } else {
        return [...state, action.payload];
      }
    default:
      return state
  }
}
