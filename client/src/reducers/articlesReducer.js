import initialState from './initialState'



export default function articlesReducer(state = initialState.articles, action) {
  switch(action.type) {
    case 'LOADING_ARTICLES':
      if (!state.find(element => element.name === action.payload.name)) {
        return [...state, action.payload]
      } else {
        return state
      }
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
    case 'LOG_OUT':
       return initialState.articles
    default:
      return state
  }
}
