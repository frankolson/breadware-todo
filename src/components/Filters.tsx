import React from 'react'
import FilterLink from '../components/FilterLink'
import { VisibilityFilters } from '../constants'

function Filters() {
  return (
    <li className="list-group-item">
      Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      {', '}
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      {', '}
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </li>
  )
}

export default Filters

