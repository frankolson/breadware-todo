import { connect } from 'react-redux'
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

export default HomeContainer

