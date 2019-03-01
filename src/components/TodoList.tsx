import React from 'react'
import { Link } from 'react-router-dom'

import { Todo as TodoProps } from '../types'
import AllTodos from './TodoList/AllTodos'
import NoTodos from './TodoList/NoTodos'

export interface Props {
  toggleTodo: any,
  removeTodo: any,
  role: string,
  totalTodoCount: number,
  todos: TodoProps[],
}

function TodoList(props: Props) {
  return (
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
}

export default TodoList

