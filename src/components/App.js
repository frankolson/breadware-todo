import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = ({ match: { params } }) => (
  <div class="container container--small my-4">
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
  </div>
)

export default App
