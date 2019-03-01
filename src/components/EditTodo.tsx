import React, { Component, FormEvent } from 'react'
import { Link } from 'react-router-dom'

export interface Props {
  id: number,
  title: string,
  text: string | null,
  updateTodo(id: number, title: string, text: string): void,
  history: {
    push(input: string): void,
  }
}

export interface State {
  title: string | null,
  text: string | null,
}

class EditForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      title: props.title,
      text: props.text
    }
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { title, text } = this.state
    if (!this.stateFieldBlank('title')) { return }
    if (!this.stateFieldBlank('text')) { return } 
    const { id, updateTodo, history } = this.props
    updateTodo(id, title || '', text || '')
    history.push("/todos")
  }

  handleTitleUpdate = (title: string) => {
    this.setState({ title })
  }

  handleTextUpdate = (text: string) => {
    this.setState({ text })
  }

  stateFieldBlank = (field) => (
    this.state[field] == null || this.state[field].trim()
  )

  render() {
    const { title, text } = this.state
    const titleBlank = this.stateFieldBlank('title')
    const textBlank = this.stateFieldBlank('text')

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
                value={title || ''}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                placeholder="Todo description"
                className="form-control"
                onChange={(e) => this.handleTextUpdate(e.target.value)}
                value={text || ''}
              ></textarea>
            </div>

            <button
              disabled={!titleBlank || !textBlank}
              className="btn btn-primary"
            >Update Todo</button>
          </form>
        </div>
      </div>
    )
  }
}

export default EditForm
