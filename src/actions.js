let nextTodoId = 0

/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}

/*
 * action creators
 */

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const updateTodo = (id, text) => ({
  type: UPDATE_TODO,
  id,
  text
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

