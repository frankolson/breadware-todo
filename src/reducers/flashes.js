import { ADD_FLASH, REMOVE_FLASH } from '../actions'

const flashes = (state = [], action) => {
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

