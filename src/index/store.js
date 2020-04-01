import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

export default createStore(
    combineReducers(reducers),
    {
        from: '北京',
        to: '上海',
        
        cityData: null,
        isCityDataLoading: false,
        isCitySelectorShow: false,
        currentSelectingLeftCity: false,
    },
    applyMiddleware(thunk)
)