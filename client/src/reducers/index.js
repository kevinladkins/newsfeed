import {combineReducers} from 'redux';
import sources from './sourcesReducer';
import articles from './articlesReducer';
import auth from '.authReducer';



const rootReducer = combineReducers({
  sources,
  articles,
  auth
})

export default rootReducer;
