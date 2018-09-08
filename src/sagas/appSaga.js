import ACTIONS from '../constants/actionTypes';
import { take, put, all } from 'redux-saga/effects';
import axios from 'axios';
import { appActionCreator } from '../actions';

//SAMPLE SAGA WITH A GET API CALL
function getData(API_URL) {
  return axios({
    method: 'get',
    url: API_URL,
  }).catch(err => {
    console.log(err);
  });
}

function* getDataWatcher() {
  while (true) {
    const action = yield take(ACTIONS.REQUEST_DATA);
    try {
      // Uncomment these 3 lines when looking to make the API calls
      // const API_URL = yield select(state => state.config.API_URL);
      // const result = yield call(getData, API_URL + 'data');
      // yield put(appActionCreator.receiveData(result.data));
      yield put(appActionCreator.receiveData({}));
    } catch (err) {}
  }
}

export default function* appSaga() {
  yield all([
    getDataWatcher()
  ]);
}
