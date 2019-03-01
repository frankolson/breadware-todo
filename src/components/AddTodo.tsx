import React, { Component, FormEvent } from 'react'
import { Link } from 'react-router-dom'

export interface Props {
  addTodo(title: string, text: string): void,
  history: {
    push(input: string): void,
  }
}

export interface State {
  title: string,
  text: string,
}

class AddTodo extends Component<Props, State> {
  state = {
    title: '',
    text: ''
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { title, text } = this.state
    if (!title.trim()) { return }
    if (!text.trim()) { return }

    const { addTodo, history } = this.props
    addTodo(title, text)
    history.push("/todos")
  }

  handleTitleUpdate = (title: string) => {
    this.setState({ title })
  }

  handleTextUpdate = (text: string) => {
    this.setState({ text })
  }

  render() {
    const { title, text } = this.state

    return (
      <div className="container container--small my-4">
        <Link to="/todos" className="mb-1">Back to Todos</Link>

        <div className="card card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                placeholder="Todo Title"
                className="form-control"
                onChange={(e) => this.handleTitleUpdate(e.target.value)}
                value={title}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                placeholder="Todo description"
                className="form-control"
                onChange={(e) => this.handleTextUpdate(e.target.value)}
                value={text}
              ></textarea>
            </div>

            <button
              disabled={!title.trim() || !text.trim()}
              className="btn btn-primary"
            >Add Todo</button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddTodo

