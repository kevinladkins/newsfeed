import initialState from './initialState'


export default function articlesReducer(state = initialState.articles, action) {
  switch(action.type) {
    case 'GET_ARTICLES':
      const updatedState = Object.assign({}, state, {})
      updatedState[action.payload.name] = action.payload.articles
      return updatedState
    default:
      return state
  }
}
