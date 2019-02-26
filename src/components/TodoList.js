import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Todo from './Todo'
import Filters from './Filters'

const NoTodos = (props) => (
  <p className="text-center">
    There are no todos yet. Let's create some!
  </p>
)

const AllTodos = ({ todos, onTodoClick }) => (
  <ul className="list-group">
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}

    <Filters />
  </ul>
)

const TodoList = (props) => (
  <div className="container container--small my-4">
    <div className="text-center mb-2">
      <Link to="/todos/create" className="btn btn-primary">
        Create a todo +
      </Link>
    </div>

    {props.totalTodoCount > 0
      ? <AllTodos {...props } />
      : <NoTodos />
    }
  </div>
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
