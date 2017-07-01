import {combineReducers} from 'redux';
import sources from './sourcesReducer';
import channels from './channelsReducer';



const rootReducer = combineReducers({
  channels,
  sources
})

export default rootReducer;
