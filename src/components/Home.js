import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class Home extends Component {
  render() {
    if (this.props.authenticated) {
      return <Redirect to="/todos" />
    }

    return (
      <div className="container container--small text-center my-4">
        <p>
          Welcome to my Breadware Tech Challenge! Login in to begin creating
          todos
        </p>

        <div className="d-flex justify-content-around">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.props.authenticate('employee')}
          >
            Login as an Employee
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.props.authenticate('manager')}
          >
            Login as a Manager
          </button>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  authenticate: PropTypes.func.isRequired,
}

export default Home
