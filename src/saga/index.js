import { all } from 'redux-saga/effects';

import { homeSagas } from './home';
import { mineSagas } from './mine';
import { popularizeSagas } from './popularize';

export default function* rootSaga() {
  yield all([...homeSagas, ...mineSagas, ...popularizeSagas]);
}
