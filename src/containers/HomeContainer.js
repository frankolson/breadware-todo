import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { authenticate } from '../actions'
import Home from '../components/Home'

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
})

const mapDispatchToProps = (dispatch) => ({
  authenticate: (role) => dispatch(authenticate(role))
})

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default withRouter(HomeContainer)

