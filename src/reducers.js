import { combineReducers } from 'redux'
import {
  ADD_TODO,
  AUTHENTICATE,
  INAUTHENTICATE,
  TOGGLE_TODO,
  UPDATE_TODO
} from './actions'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case UPDATE_TODO:
      return state.map(todo => (
        todo.id === action.id ? { ...todo, text: action.text } : todo
      ))
    case TOGGLE_TODO:
      return state.map(todo => (
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      ))
    default:
      return state
  }
}

const user = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, role: action.role, authenticated: true }
    case INAUTHENTICATE:
      return { ...state, role: null, authenticated: false }
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  user
})

export default todoApp

