import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.state.text.trim()) { return }

    const { addTodo, history } = this.props
    addTodo(this.state.text)
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
                placeholder="Go ahead and add the todo here and hit enter to create"
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

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default AddTodo

