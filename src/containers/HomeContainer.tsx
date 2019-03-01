import { AnyAction } from 'redux'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { withRouter } from 'react-router-dom'

import { StoreState } from '../types'
import * as actions from '../actions/userActions'
import Home from '../components/Home'

export function mapStateToProps({ user: { authenticated } }: StoreState) {
  return {
    authenticated
  }
}

export function mapDispatchToProps(dispatch: ThunkDispatch<StoreState, any, AnyAction>) {
  return {
    authenticate: (role: string) => dispatch(actions.authenticate(role))
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default withRouter(HomeContainer as any)

