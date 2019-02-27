import { combineReducers } from 'redux'
import {
  ADD_TODO,
  AUTHENTICATE,
  INAUTHENTICATE,
  TOGGLE_TODO,
  UPDATE_TODO,
  ADD_FLASH,
  REMOVE_FLASH
} from './actions'

const flashes = (state = [], action) => {
  switch (action.type) {
    case ADD_FLASH:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
    case REMOVE_FLASH:
      return state.filter(flash => flash.id !== action.id)
    default:
      return state
  }
}

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
  flashes,
  todos,
  user
})

export default todoApp

