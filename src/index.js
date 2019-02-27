import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import todoApp from './reducers'
import NavContainer from './containers/NavContainer'
import HomeContainer from './containers/HomeContainer'
import LoginContainer from './containers/LoginContainer'
import PrivateRoute from './containers/PrivateRoute'
import AddTodoContainer from './containers/AddTodoContainer'
import EditTodoContainer from './containers/EditTodoContainer'
import VisibleTodoList from './containers/VisibleTodoList'
import './index.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(todoApp, composeEnhancers(
  applyMiddleware(thunk),
))

render(
  <Provider store={store}>
    <Router>
      <div>
        <NavContainer />

        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <PrivateRoute exact path="/todos" component={VisibleTodoList} />
        <PrivateRoute exact path="/todos/create" component={AddTodoContainer} />
        <PrivateRoute exact path="/todos/filter/:filter?" component={VisibleTodoList} />
        <PrivateRoute exact path="/todos/:id?/edit" component={EditTodoContainer} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
