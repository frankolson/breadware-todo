import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class EditForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: props.text
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.state.text.trim()) { return }

    const { id, updateTodo, history } = this.props
    updateTodo(id, this.state.text)
    history.push("/todos")
  }

  handleUpdate = (text) => {
    this.setState({ text })
  }

  render() {
    return (
      <div className="container container--small my-4">
        <Link to="/todos" className="mb-1">Back to Todos</Link>

        <div className="card card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                placeholder="Whoops, Todos need some text..."
                className="form-control"
                onChange={(e) => this.handleUpdate(e.target.value)}
                value={this.state.text}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

EditForm.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  updateTodo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default EditForm
