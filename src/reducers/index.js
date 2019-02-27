import { combineReducers } from 'redux'

import flashes from './flashes'
import todos from './todos'
import user from './user'

const todoApp = combineReducers({
  flashes,
  todos,
  user
})

export default todoApp

