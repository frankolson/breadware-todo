import { AnyAction } from 'redux'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { withRouter } from 'react-router-dom'

import { StoreState } from '../types'
import * as actions from '../actions/userActions'
import Nav from '../components/Nav'

export function mapStateToProps({ user: { authenticated, role } }: StoreState) {
  return {
    authenticated,
    role
  }
}

export function mapDispatchToProps(dispatch: ThunkDispatch<StoreState, any, AnyAction>) {
  return {
    inauthenticate: () => dispatch(actions.inauthenticate())
  }
}

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)

export default withRouter(NavContainer as any)

