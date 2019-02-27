import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class Home extends Component {
  render() {
    if (this.props.authenticated) {
      return <Redirect to="/todos" />
    }

    return (
      <div className="text-center my-4">
        <p>
          Welcome to my Breadware Tech Challenge! Login in to begin creating
          todos
        </p>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.props.authenticate()}
        >
          Login
        </button>
      </div>
    )
  }
}

Home.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default Home
