import { connect } from 'react-redux'
import { removeFlash } from '../actions'
import FlashList from '../components/FlashList'

const mapStateToProps = (state) => ({
  flashes: state.flashes
})

const mapDispatchToProps = (dispatch) => ({
  removeFlash: (id) => dispatch(removeFlash(id))
})

const FlashListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
 )(FlashList)

export default FlashListContainer

