import React, { Component, FormEvent } from 'react'
import { Link } from 'react-router-dom'

export interface Props {
  id: number,
  text: string | null,
  updateTodo(id: number, text: string): void,
  history: {
    push(input: string): void,
  }
}

export interface State {
  text: string | null,
}

class EditForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      text: props.text
    }
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { text } = this.state
    if (text == null || !text.trim()) { return }

    const { id, updateTodo, history } = this.props
    updateTodo(id, text)
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
                placeholder="Whoops, Todos need some text..."
                className="form-control"
                onChange={(e) => this.handleUpdate(e.target.value)}
                value={this.state.text || ''}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default EditForm
