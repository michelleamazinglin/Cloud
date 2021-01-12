import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import About from './about';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout }
)(About);