import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { StoreState, Todo } from '../types'
import * as actions from '../actions/todoActions'
import EditTodo from '../components/EditTodo'

function findTodoField(id: number, field: string, todos: Array<Todo>) {
  const todo = todos.find(todo => todo.id === id)

  return todo ? todo[field]: null
}

export function mapStateToProps(state: StoreState, { match: { params } }) {
  return {
    id: parseInt(params.id, 10),
    title: findTodoField(parseInt(params.id, 10), 'title', state.todos),
    text: findTodoField(parseInt(params.id, 10), 'text', state.todos)
  }
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    updateTodo: (id: number, title: string, text: string) => (
      dispatch(actions.updateTodo(id, title, text))
    )
  }
}

const EditTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTodo)

export default withRouter(EditTodoContainer as any)

