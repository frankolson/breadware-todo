import React, { Component, FormEvent } from 'react'
import { Link } from 'react-router-dom'

export interface Props {
  addTodo(text: string): void,
  history: {
    push(input: string): void,
  }
}

export interface State {
  text: string,
}

class AddTodo extends Component<Props, State> {
  state = {
    text: ''
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!this.state.text.trim()) { return }

    const { addTodo, history } = this.props
    addTodo(this.state.text)
    history.push("/todos")
  }

  handleUpdate = (text: string) => {
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

export default AddTodo

