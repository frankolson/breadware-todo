import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
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

const mapStateToProps = (state, { match: { params } }) => {
  return {
    role: state.user.role,
    totalTodoCount: state.todos.length,
    todos: getVisibleTodos(state.todos, params.filter || 'SHOW_ALL')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id))
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer

