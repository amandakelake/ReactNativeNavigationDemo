import * as actionTypes from '../action/index';

const initState = {
  initCount: 0,
  name: '',
  age: '',
  job: ''
};

export default function count(state = initState, action) {
  switch (action.type) {
    case actionTypes.HOME_ADD:
      return {
        ...state,
        ...action.initCount
      };
    case actionTypes.HOME_CUT:
      return {
        ...state,
        ...action.initCount
      };
    default:
      return state;
  }
}
