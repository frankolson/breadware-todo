import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { StoreState } from '../types'
import * as actions from '../actions/flashActions'
import FlashList from '../components/FlashList'

export function mapStateToProps({ flashes }: StoreState) {
  return {
    flashes
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.RemoveFlash>) {
  return {
    removeFlash: (id) => dispatch(actions.removeFlash(id))
  }
}

const FlashListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
 )(FlashList)

export default FlashListContainer

