import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { StoreState } from '../types'
import * as actions from '../actions/userActions'
import Login from '../components/Login'

export function mapStateToProps(state, ownProps) {
  return {
    authenticated: state.user.authenticated,
    ...ownProps
  }
}

export function mapDispatchToProps(dispatch: ThunkDispatch<StoreState,any,AnyAction>) {
  return {
    authenticate: (role) => dispatch(actions.authenticate(role))
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer

