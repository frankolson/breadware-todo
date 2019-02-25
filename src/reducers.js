import { combineReducers } from 'redux'
import { ADD_TODO, UPDATE_TODO, TOGGLE_TODO } from './actions'

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

const todoApp = combineReducers({ todos })

export default todoApp

