import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'

import indexPage from './components/IndexPage/reducer'

const reducers = combineReducers({
    indexpage: indexPage
})

const store = () => {
    return createStore(reducers, {}, compose(applyMiddleware(thunkMiddleware)))
}

// console.log(store().getState())

export default store
