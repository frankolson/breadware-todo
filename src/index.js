import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'

import todoApp from './reducers'
import routes from './routes'
import './index.scss'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(todoApp, composeEnhancers(
  applyMiddleware(thunk),
))

render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
)
