import { createStore } from 'redux';
import rootReducer from '../reducers';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import createInitialState from './initialState';

export default function configureStore() {
  const initialState = createInitialState();
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
