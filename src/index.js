import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import todoApp from './reducers'
import AddTodoContainer from './containers/AddTodoContainer'
import EditTodoContainer from './containers/EditTodoContainer'
import VisibleTodoList from './containers/VisibleTodoList'
import './index.css'

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/todos/" component={VisibleTodoList} />
        <Route exact path="/todos/create" component={AddTodoContainer} />
        <Route exact path="/todos/filter/:filter?" component={VisibleTodoList} />
        <Route exact path="/todos/:id?/edit" component={EditTodoContainer} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
