import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">Breadware Todos</Link>

          {this.props.authenticated &&
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => this.props.inauthenticate()}
            >Logout</button>
          }
        </div>
      </nav>
    )
  }
}

Nav.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  inauthenticate: PropTypes.func.isRequired
}

export default Nav
