import { connect } from 'react-redux';
import Login from './Login.component';
import { requestLogin } from '../Auth.actions';

const mapDispatchToProps = dispatch => ({
  onLoginClick: (creds) => {
    dispatch(requestLogin(creds));
  }
});

export default connect(null, mapDispatchToProps)(Login);
