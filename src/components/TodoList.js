import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import Filters from './Filters'

const TodoList = ({ todos, totalTodoCount, onTodoClick }) => (
  <ul class="list-group">
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}

    {totalTodoCount > 0 && <Filters />}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
