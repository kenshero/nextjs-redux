import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger';

import indexPage from './components/IndexPage/reducer'

export const reducers = combineReducers({
    indexpage: indexPage
})

export const initStore = (reducer, initialState, isServer) => {
  return createStore(reducer, initialState, compose(
      applyMiddleware(thunkMiddleware)))
}
