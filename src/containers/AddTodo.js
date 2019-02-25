import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="card card-body mb-2">
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <div className="form-group">
          <input
            placeholder="Enter new todo here and click enter to create..."
            className="form-control"
            ref={node => {
              input = node
            }}
          />
        </div>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
