import React from 'react'
import { Redirect } from 'react-router-dom'

export interface Props {
  location: any
  setFlash(text: string): void
}

function UnAuthorized({ location, setFlash }: Props) {
  setFlash('You are not authorized to do that')

  return <Redirect to={{
    pathname: '/',
    state: { flash: 'You are not authorized to do that' }
  }} />
}

export default UnAuthorized

