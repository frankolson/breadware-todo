import { combineReducers } from 'redux'

import { StoreState } from '../types'
import flashes from './flashes'
import todos from './todos'
import user from './user'

const todoApp = combineReducers<StoreState>({
  flashes,
  todos,
  user
})

export default todoApp

