import { AUTHENTICATE, INAUTHENTICATE } from '../actions'

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

export default user

