import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Todo = ({ onClick, id, completed, text }) =>(
  <li className="list-group-item d-flex justify-content-between">
    <span
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </span>

    <Link to={`/todos/${id}/edit`}>Edit</Link>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
