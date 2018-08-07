import { connect } from 'react-redux';
import Registration from './Registration.component';
import { requestRegistration } from '../Auth.actions';

const mapDispatchToProps = dispatch => ({
  onRegistrationClick: (creds) => {
    dispatch(requestRegistration(creds));
  }
});

export default connect(null, mapDispatchToProps)(Registration);
