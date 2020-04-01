import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

export default createStore(
    combineReducers(reducers),
    {
        from: '北京',
    },
    applyMiddleware(thunk)
)