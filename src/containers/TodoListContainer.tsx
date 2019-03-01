import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { StoreState, Todo } from '../types'
import * as actions from '../actions/todoActions'
import TodoList from '../components/TodoList'

function getVisibleTodos(todos: Array<Todo>, filter: string) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

export function mapStateToProps(state: StoreState, { match: { params } }) {
  return {
    role: state.user.role,
    totalTodoCount: state.todos.length,
    todos: getVisibleTodos(state.todos, params.filter || 'SHOW_ALL')
  }
}

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    toggleTodo: id => dispatch(actions.toggleTodo(id)),
    removeTodo: id => dispatch(actions.removeTodo(id))
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer

