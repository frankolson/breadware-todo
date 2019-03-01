import React, { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

export interface Props {
  filter: string
  children: ReactNode
}

function FilterLink({ filter, children }: Props) {
  return(
    <NavLink
      exact
      to={filter === 'SHOW_ALL' ? '/todos' : `/todos/filter/${filter}`}
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}
    >
      {children}
    </NavLink>
  )
}

export default FilterLink

