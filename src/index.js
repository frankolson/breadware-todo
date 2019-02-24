import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import todoApp from './reducers'
import App from './components/App'

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/:filter?" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)

