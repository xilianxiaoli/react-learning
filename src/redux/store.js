import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise';
import createSagaMiddleware from 'redux-saga'
import todoApp from './reducer'
import mySaga from '../saga/index'
const sagaMiddleware = createSagaMiddleware()
let store = createStore(todoApp,applyMiddleware(
    thunkMiddleware
))
// sagaMiddleware.run(mySaga)

export default store