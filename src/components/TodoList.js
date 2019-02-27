import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Todo from './Todo'
import Filters from './Filters'

const NoTodos = (props) => {
  if (props.role === 'manager') {
    return <p className="text-center">
      There are no todos yet. Let's create some!
    </p>
  } else {
    return <p className="text-center">
      There are no todos yet. Talk to your manager about creating some!
    </p>
  }
}

const AllTodos = ({ toggleTodo, removeTodo, role, todos }) => (
  <ul className="list-group">
    {todos.map((todo) => (
      <Todo
        key={todo.id}
        toggleTodo={() => toggleTodo(todo.id)}
        removeTodo={() => removeTodo(todo.id)}
        role={role}
        {...todo}
      />
    ))}

    <Filters />
  </ul>
)

const TodoList = (props) => (
  <div className="container container--small my-4">
    {props.role === 'manager' &&
      <div className="text-center mb-2">
        <Link to="/todos/create" className="btn btn-primary">
          Create a todo +
        </Link>
      </div>
    }

    {props.totalTodoCount > 0
      ? <AllTodos {...props } />
      : <NoTodos role={props.role} />
    }
  </div>
)

TodoList.propTypes = {
  role: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
}

export default TodoList

