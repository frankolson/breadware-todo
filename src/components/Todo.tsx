import React from 'react'
import { Link } from 'react-router-dom'

export interface Props {
  toggleTodo: any,
  removeTodo: any,
  id: number,
  completed: boolean,
  role: string,
  title: string,
  text: string,
}

const Todo = ({ toggleTodo, removeTodo, id, completed, role, title, text }: Props) =>(
  <li className="list-group-item d-flex justify-content-between">
    <div className="d-flex align-items-center">
      <i
        onClick={role === 'employee' ? toggleTodo : null}
        className={`far fa-${completed ? 'check-square' : 'square'} mr-2`}
        style={{ cursor: role === 'employee' ? 'pointer' : 'default' }}
      ></i>

      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        <div>{title}</div>
        <small className="text-muted">{text}</small>
      </span>
      
    </div>

    {role === 'manager' &&
      <div>
        <Link to={`/todos/${id}/edit`} className="mr-1">Edit</Link>
        <a href="#" onClick={removeTodo} className="text-danger">Delete</a>
      </div>
    }
  </li>
)

export default Todo

