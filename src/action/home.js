import * as actionTypes from './index';

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