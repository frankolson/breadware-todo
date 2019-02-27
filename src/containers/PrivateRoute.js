import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'
import { authenticate, addFlash } from '../actions'

const UnAuthenticated = ({ location, setFlash }) => {
  setFlash('You need to login first')

  return <Redirect to={{
    pathname: '/login',
    state: { from: location }
  }} />
}

const UnAuthorized = ({ location, setFlash }) => {
  setFlash('You are not authorized to do that')

  return <Redirect to={{
    pathname: '/',
    state: { flash: 'You are not authorized to do that' }
  }} />
}

const AuthCheck = ({
  component: Component,
  authenticated,
  authorized,
  setFlash,
  ...rest
}) => (
  <Route {...rest} render={props => (
    authenticated ? (
      authorized
        ? <Component {...props} />
        : <UnAuthorized {...props} setFlash={setFlash} />
    ) : (
      <UnAuthenticated {...props} setFlash={setFlash} />
    )
  )} />
)

const mapStateToProps = (state, ownProps) => ({
  authenticated: state.user.authenticated,
  authorized: (ownProps.roles || []).includes(state.user.role),
  ...ownProps
})

const mapDispatchToProps = (dispatch) => ({
  authenticate: () => dispatch(authenticate()),
  setFlash: (text) => dispatch(addFlash(text))
})

const PrivateRoute = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthCheck)

export default withRouter(PrivateRoute)

