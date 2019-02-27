import { connect } from 'react-redux'
import { inauthenticate } from '../actions'
import Nav from '../components/Nav'

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  role: state.user.role
})

const mapDispatchToProps = (dispatch) => ({
  inauthenticate: () => dispatch(inauthenticate())
})

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)

export default NavContainer

