import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import UnAuthenticated from './AuthCheck/UnAuthenticated'
import UnAuthorized from './AuthCheck/UnAuthorized'

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

export default AuthCheck

