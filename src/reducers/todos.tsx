import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO
} from '../constants'
import { TodoAction } from '../actions/todoActions'
import { Todo } from '../types'

interface TodosState extends Array<Todo> {}

const initialState:TodosState = []

function todos(state:TodosState = initialState, action:TodoAction) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          text: action.text,
          completed: false
        }
      ]
    case UPDATE_TODO:
      return state.map(todo => (
        todo.id === action.id ? { ...todo, title: action.title, text: action.text } : todo
      ))
    case TOGGLE_TODO:
      return state.map(todo => (
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      ))
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

export default todos

