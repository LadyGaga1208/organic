import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import helloSaga from './sagas/helloSaga'
import reducer from './reducers/reducer'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(helloSaga);

export default store;