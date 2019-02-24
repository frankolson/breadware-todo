import React from 'react'
import Filters from './Filters'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = ({ match: { params } }) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
    <Filters />
  </div>
)

export default App

