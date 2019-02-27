import React from 'react'
import { Route } from 'react-router-dom'

import NavContainer from './containers/NavContainer'
import FlashListContainer from './containers/FlashListContainer'
import HomeContainer from './containers/HomeContainer'
import LoginContainer from './containers/LoginContainer'
import PrivateRoute from './containers/PrivateRoute'
import AddTodoContainer from './containers/AddTodoContainer'
import EditTodoContainer from './containers/EditTodoContainer'
import TodoListContainer from './containers/TodoListContainer'

const routes = (
  <div>
    <NavContainer />
    <FlashListContainer />

    <Route exact path="/" component={HomeContainer} />
    <Route exact path="/login" component={LoginContainer} />

    <PrivateRoute
      exact
      path="/todos"
      component={TodoListContainer}
      roles={['employee', 'manager']}
    />
    <PrivateRoute
      exact
      path="/todos/filter/:filter?"
      component={TodoListContainer}
      roles={['employee', 'manager']}
    />
    <PrivateRoute
      exact
      path="/todos/create"
      component={AddTodoContainer}
      roles={['manager']}
    />
    <PrivateRoute
      exact
      path="/todos/:id?/edit"
      component={EditTodoContainer}
      roles={['manager']}
    />
  </div>
)

export default routes

