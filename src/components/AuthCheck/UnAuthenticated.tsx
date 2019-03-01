import React from 'react'
import { Redirect } from 'react-router-dom'

export interface Props {
  location: any
  setFlash(text: string): void
}

function UnAuthenticated({ location, setFlash }: Props) {
  setFlash('You need to login first')

  return <Redirect to={{
    pathname: '/login',
    state: { from: location }
  }} />
}

export default UnAuthenticated

