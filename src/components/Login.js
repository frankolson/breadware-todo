import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    redirectToReferrer: false
  }

  login = (role) => {
    this.props.authenticate(role)
      .then(() => (
        this.setState({ redirectToReferrer: true })
      ))
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/todos' } }
    const { redirectToReferrer } = this.state

    if (this.props.authenticated) {
      return <Redirect to='/todos' />
    }

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }

    return (
      <div className="container container--small text-center my-4">
        <p>Go ahead and login!</p>

        <div className="d-flex justify-content-around">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.login('employee')}
          >
            Login as an Employee
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.login('manager')}
          >
            Login as a Manager
          </button>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({ pathname: PropTypes.string })
    })
  })
}

export default Login
