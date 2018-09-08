import { fork } from 'redux-saga/effects';
import { all } from 'redux-saga/effects';
import appSaga from './appSaga';
export default function* rootSaga() {
  yield all([fork(appSaga)]);
}
