import { ADD_FLASH, REMOVE_FLASH } from '../constants'
import { FlashAction } from '../actions/flashActions'
import { Flash } from '../types'

interface FlashesState extends Array<Flash> {}

const initialState:FlashesState = []

function flashes(state:FlashesState = initialState, action:FlashAction) {
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

export default flashes

