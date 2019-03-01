import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { StoreState, Todo } from '../types'
import * as actions from '../actions/todoActions'
import EditTodo from '../components/EditTodo'

function findTodoText(id: number, todos: Array<Todo>) {
  const todo = todos.find(todo => todo.id === id)

  return todo ? todo.text : null
}

export function mapStateToProps(state: StoreState, { match: { params } }) {
  return {
    id: parseInt(params.id, 10),
    text: findTodoText(parseInt(params.id, 10), state.todos)
  }
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    updateTodo: (id: number, text: string) => dispatch(actions.updateTodo(id, text))
  }
}

const EditTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTodo)

export default withRouter(EditTodoContainer as any)

