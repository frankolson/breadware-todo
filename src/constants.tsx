/*
 * action types
 */

export const ADD_FLASH = 'ADD_FLASH'
export type ADD_FLASH = typeof ADD_FLASH
export const REMOVE_FLASH = 'REMOVE_FLASH'
export type REMOVE_FLASH = typeof REMOVE_FLASH

export const ADD_TODO = 'ADD_TODO'
export type ADD_TODO = typeof ADD_TODO
export const UPDATE_TODO = 'UPDATE_TODO'
export type UPDATE_TODO = typeof UPDATE_TODO
export const REMOVE_TODO = 'REMOVE_TODO'
export type REMOVE_TODO = typeof REMOVE_TODO
export const TOGGLE_TODO = 'TOGGLE_TODO'
export type TOGGLE_TODO = typeof TOGGLE_TODO

export const AUTHENTICATE = 'AUTHENTICATE'
export type AUTHENTICATE = typeof AUTHENTICATE
export const INAUTHENTICATE = 'INAUTHENTICATE'
export type INAUTHENTICATE = typeof INAUTHENTICATE

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}

