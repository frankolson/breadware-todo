import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { StoreState } from '../types'
import * as actions from '../actions/todoActions'
import AddTodo from '../components/AddTodo'

export function mapStateToProps(state: StoreState) {
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addTodo: (text: string) => dispatch(actions.addTodo(text))
  }
}

const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

export default withRouter(AddTodoContainer as any)

