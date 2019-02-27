import { connect } from 'react-redux'
import { authenticate } from '../actions'
import Login from '../components/Login'

const mapStateToProps = (state, ownProps) => ({
  ...ownProps
})

const mapDispatchToProps = (dispatch) => ({
  authenticate: () => dispatch(authenticate())
})

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer

