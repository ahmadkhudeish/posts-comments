import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import RootReducer  from '../reducers/RootState'
import RootSaga from '../sagas/RootSaga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  RootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(RootSaga)
export default store;