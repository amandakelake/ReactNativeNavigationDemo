import * as actionTypes from './index';
import post from '../utils/fetch';

export function homeAdd(initCount) {
  return {
    type: actionTypes.HOME_ADD,
    initCount
  }
}

export function homeCut(initCount) {
  return {
    type: actionTypes.HOME_CUT,
    initCount
  }
}

export function getSomeData() {
  return dispatch => {
    post('/get/data',{}, res => {
      const someData = res.data.someData;
      dispatch({
        type: actionTypes.HOME_GET_SOMEDATA,
        someData
      })
    })
  }
}

export function setSomeData(data) {
  return dispatch => {
    post('/get/setdata',{}, res => {
      const someData = res.data.someData;
      dispatch({
        type: actionTypes.HOME_SET_SOMEDATA,
        someData
      })
    })
  }
}

export function fetchSagaData() {
  return {
    type: actionTypes.HOME_FETCH_SAGA_DATA
  }
}