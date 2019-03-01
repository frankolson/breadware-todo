import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export interface Props {
  authenticated(role: string): void,
  inauthenticate(): void,
  role: string,
  history: {
    push(location: string): void,
  }
}

class Nav extends Component<Props, {}> {
  logout = () => {
    this.props.history.push('/')
    this.props.inauthenticate()
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <Link to="/" className="navbar-brand">Breadware Todos</Link>

            {this.props.authenticated &&
              <div>
                <span className="mr-2">Logged in as a {this.props.role}</span>

                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={this.logout}
                >Logout</button>
              </div>
            }
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav

