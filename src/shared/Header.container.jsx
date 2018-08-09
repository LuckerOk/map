import { connect } from 'react-redux';
import { receiveLogout, requestLogout } from 'src/pages/Auth/Auth.actions';
import Header from './Header.component';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  onLogoutClick: () => {
    dispatch(requestLogout());
    localStorage.removeItem('token');
    dispatch(receiveLogout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
