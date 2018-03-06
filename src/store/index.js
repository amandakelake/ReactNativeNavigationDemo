import {createStore } from 'redux';

import combineReducers from '../reducer/index';

const store = createStore(combineReducers)

export default store;