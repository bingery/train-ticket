import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'

import store from './store'
import App from './App.jsx'
import '../index.css'

ReactDom.render(
    <Provider store={store}>
        <App></App>
    </Provider>
    , document.getElementById('root'))