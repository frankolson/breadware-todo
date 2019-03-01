import React from 'react'

export interface Props {
  role: string,
}

function NoTodos({ role }: Props) {
  if (role === 'manager') {
    return <p className="text-center">
      There are no todos yet. Let's create some!
    </p>
  } else {
    return <p className="text-center">
      There are no todos yet. Talk to your manager about creating some!
    </p>
  }
}

export default NoTodos

