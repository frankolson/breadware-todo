import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    this.props.authenticate()
      .then(() => (
        this.setState({ redirectToReferrer: true })
      ))
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }

    return (
      <div className="text-center my-4">
        <p>Go ahead and login!</p>

        <button
          type="button"
          className="btn btn-primary"
          onClick={this.login}
        >
          Login
        </button>
      </div>
    )
  }
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({ pathname: PropTypes.string })
    })
  })
}

export default Login
