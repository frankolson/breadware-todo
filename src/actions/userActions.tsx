import { Dispatch } from 'redux'
import * as constants from '../constants'

export interface Login {
  type: constants.AUTHENTICATE,
  role: string
}

export interface Logout {
  type: constants.INAUTHENTICATE
}

export type UserAction = Login | Logout

export function login(role: string): Login {
  return {
    type: constants.AUTHENTICATE,
    role
  }
}

export function logout(): Logout {
  return {
    type: constants.INAUTHENTICATE
  }
}

/*
 * async methods
 */

export function authenticate(role: string) {
  return (dispatch: Dispatch) => (
    new Promise(resolve => setTimeout(resolve, 500))
      .then(() => dispatch(login(role)))
  )
}

export function inauthenticate() {
  return (dispatch: Dispatch) => (
    new Promise(resolve => setTimeout(resolve, 500))
      .then(() => dispatch(logout()))
  )
}

