import initialState from './initialState'


export default function articlesReducer(state = initialState.articles, action) {
  switch(action.type) {
    case 'GET_ARTICLES':
      const title = action.payload.title;
      const articles = action.payload.articles;
      return Object.assign({}, state, {title: articles})
    default:
      return state
  }
}
