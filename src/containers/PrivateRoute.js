import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'
import { authenticate } from '../actions'

const AuthCheck = ({component: Component, authenticated, ...rest }) => (
  <Route {...rest} render={props => (
    authenticated
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />
  )} />
)

const mapStateToProps = (state, ownProps) => ({
  authenticated: state.user.authenticated,
  ...ownProps
})

const mapDispatchToProps = (dispatch) => ({
  authenticate: () => dispatch(authenticate)
})

const PrivateRoute = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthCheck)

export default withRouter(PrivateRoute)

