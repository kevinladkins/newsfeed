import {combineReducers} from 'redux';
import sources from './sourcesReducer';
import channels from './channelsReducer';
import articles from './articlesReducer'



const rootReducer = combineReducers({
  channels,
  sources,
  articles
})

export default rootReducer;
