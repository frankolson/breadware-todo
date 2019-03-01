import { AUTHENTICATE, INAUTHENTICATE } from '../constants'
import { UserAction } from '../actions/userActions'
import { User as UserState } from '../types'

const initialState:UserState = {
  role: '',
  authenticated: false
}

const user = (state:UserState = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return { ...state, role: action.role, authenticated: true }
    case INAUTHENTICATE:
      return { ...state, role: '', authenticated: false }
    default:
      return state
  }
}

export default user

