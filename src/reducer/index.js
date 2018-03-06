import { combineReducers } from 'redux';

import homeReducer from './home';
import popularizeReducer from './popularize';
import mineReducer from './mine';

export default combineReducers({
  home: homeReducer,
  popularize: popularizeReducer,
  mine: mineReducer
})