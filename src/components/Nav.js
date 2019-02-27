import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Nav extends Component {
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

Nav.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  inauthenticate: PropTypes.func.isRequired,
  role: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default Nav

