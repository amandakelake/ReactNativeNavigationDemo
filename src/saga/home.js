import { put, call, takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../action/index';
import * as homeActions from '../action/home';
import * as mineActions from '../action/mine';

import post from '../utils/fetch';

function getSomeThing() {
  post('/someData', {}, res => {}, err => {});
}

function* getUserInfo({ sucCb, errCB }) {
  try {
    const res = yield call(getSomeThing());
    const data = res.data;
    yield put(homeActions.getSomeData())
    yield put(homeActions.setSomeData(data))
    yield call(sucCb);
  } catch (err) {
    yield call(errCB, err);
  }
}

function *fetchData() {
  try {
    const data = yield 
  } catch (e) {

  }
}

export const homeSagas = [
  takeLatest(actionTypes.HOME_GET_SOMEDATA, getUserInfo)
]