import React from 'react'

import Filters from '../Filters'
import Todo from '../Todo'
import { Todo as TodoProps } from '../../types'

export interface Props {
  toggleTodo(id: number): void,
  removeTodo(id: number): void,
  role: string,
  todos: TodoProps[],
}

function AllTodos({ toggleTodo, removeTodo, role, todos }: Props) {
  return (
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
}

export default AllTodos

