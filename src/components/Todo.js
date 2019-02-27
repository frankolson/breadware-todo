import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Todo = ({ toggleTodo, removeTodo, id, completed, role, text }) =>(
  <li className="list-group-item d-flex justify-content-between">
    <div>
      <i
        onClick={role === 'employee' ? toggleTodo : null}
        className={`far fa-${completed ? 'check-square' : 'square'} mr-1`}
        style={{ cursor: role === 'employee' ? 'pointer' : 'default' }}
      ></i>

      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
    </div>

    {role == 'manager' &&
      <div>
        <Link to={`/todos/${id}/edit`} className="mr-1">Edit</Link>
        <a href="#" onClick={removeTodo} className="text-danger">Delete</a>
      </div>
    }
  </li>
)

Todo.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
