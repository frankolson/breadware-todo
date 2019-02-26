import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodo from '../components/AddTodo'

const mapStateToProps = (state) => ({ })

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => {
    dispatch(addTodo(text))
  }
})

const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)

export default withRouter(AddTodoContainer)

