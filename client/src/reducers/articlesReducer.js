import initialState from './initialState'


export default function articlesReducer(state = initialState.articles, action) {
  switch(action.type) {
    case 'GET_ARTICLES':
      if (state.find(element => element.name === action.payload.name)) {
        const source = state.find(element => element.name === action.payload.name);
        const sourceIndex = state.indexOf(source);
        const newState = [...state];
        newState[sourceIndex] = action.payload;
        return newState
      } else {
        const newState = [...state, action.payload];
        return newState
      }

    default:
      return state
  }
}
