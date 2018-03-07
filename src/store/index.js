import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import combineReducers from '../reducer/index';
import rootSaga from '../saga/index';

const persistConfig = {
  key: 'root',
  storage,
  // 只有mine的数据会被persist
  whitelist: ['mine']
};
// 对reducer数据进行persist配置
const persistReducer = persistCombineReducers(persistConfig, combineReducers);

const sagaMiddleware = createSagaMiddleware();

// 中间件
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  sagaMiddleware,
  logger
)(createStore);

const configuerStore = onComplete => {
  let store = createStoreWithMiddleware(persistReducer);
  let persistor = persistStore(store, null, onComplete);
  sagaMiddleware.run(rootSaga);
  return { persistor, store };
};

export default configuerStore;
