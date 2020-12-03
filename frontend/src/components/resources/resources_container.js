import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import Resources from './resources/resources';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout }
)(Resources);