import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateTodo } from '../actions'
import EditTodo from '../components/EditTodo'

const findTodo = (id, todos) => (
  todos.find(todo => todo.id == id)
)

const mapStateToProps = (state, { match: { params } }) => ({
  id: parseInt(params.id, 10),
  text: findTodo(parseInt(params.id, 10), state.todos).text
})

const mapDispatchToProps = dispatch => ({
  updateTodo: (id, text) => {
    dispatch(updateTodo(id, text))
  }
})

const EditTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTodo)

export default withRouter(EditTodoContainer)

