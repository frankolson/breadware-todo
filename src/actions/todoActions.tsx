import * as constants from '../constants'

let nextTodoId = 0

export interface AddTodo {
  type: constants.ADD_TODO,
  id: number,
  text: string
}

export interface UpdateTodo {
  type: constants.UPDATE_TODO,
  id: number,
  text: string
}

export interface RemoveTodo {
  type: constants.REMOVE_TODO,
  id: number
}

export interface ToggleTodo {
  type: constants.TOGGLE_TODO,
  id: number
}

export type TodoAction = AddTodo | UpdateTodo | RemoveTodo | ToggleTodo

export function addTodo(text: string): AddTodo {
  return {
    type: constants.ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export function updateTodo(id: number, text: string): UpdateTodo {
  return {
    type: constants.UPDATE_TODO,
    id,
    text
  }
}

export function removeTodo(id: number): RemoveTodo {
  return {
    type: constants.REMOVE_TODO,
    id
  }
}

export function toggleTodo(id: number): ToggleTodo {
  return {
    type: constants.TOGGLE_TODO,
    id
  }
}

