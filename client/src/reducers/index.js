import {combineReducers} from 'redux';
import sources from './sourcesReducer';
import articles from './articlesReducer';
import auth from './authReducer';
import message from './messageReducer'



const rootReducer = combineReducers({
  sources,
  articles,
  auth,
  message
})

export default rootReducer;
