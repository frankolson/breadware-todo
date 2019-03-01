import * as constants from '../constants'

let nextFlashId = 0

export interface AddFlash {
  type: constants.ADD_FLASH,
  id: number,
  text: string
}

export interface RemoveFlash {
  type: constants.REMOVE_FLASH,
  id: number,
}

export type FlashAction = AddFlash | RemoveFlash

export function addFlash(text: string): AddFlash {
  return {
    type: constants.ADD_FLASH,
    id: nextFlashId++,
    text
  }
}

export function removeFlash(id: number): RemoveFlash {
  return {
    type: constants.REMOVE_FLASH,
    id
  }
}

