import { AnyAction } from 'redux'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { withRouter } from 'react-router-dom'

import { StoreState } from '../types'
import * as actions from '../actions/flashActions'
import AuthCheck from '../components/AuthCheck'

export function mapStateToProps(state: StoreState, ownProps) {
  return {
    authenticated: state.user.authenticated,
    authorized: (ownProps.roles || []).includes(state.user.role),
    ...ownProps
  }
}

export function mapDispatchToProps(dispatch: ThunkDispatch<StoreState, any, AnyAction>) {
  return {
    setFlash: (text) => dispatch(actions.addFlash(text))
  }
}

const PrivateRoute = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthCheck)

export default withRouter(PrivateRoute as any)

