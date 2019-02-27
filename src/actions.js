let nextTodoId = 0
let nextFlashId = 0

/*
 * action types
 */

export const AUTHENTICATE = 'AUTHENTICATE'
export const INAUTHENTICATE = 'INAUTHENTICATE'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const ADD_FLASH = 'ADD_FLASH'
export const REMOVE_FLASH = 'REMOVE_FLASH'

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

const login = (role) => ({
  type: AUTHENTICATE,
  role
})

const logout = () => ({
  type: INAUTHENTICATE,
})

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
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

export const addFlash = text => ({
  type: ADD_FLASH,
  id: nextFlashId++,
  text
})

export const removeFlash = id => ({
  type: REMOVE_FLASH,
  id
})

/*
 * async methods
 */

export const authenticate = (role) => (
  dispatch => (
    new Promise(resolve => setTimeout(resolve, 500))
      .then(() => dispatch(login(role)))
  )
)

export const inauthenticate = () => (
  dispatch => (
    new Promise(resolve => setTimeout(resolve, 500))
      .then(() => dispatch(logout()))
  )
)

