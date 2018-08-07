import { connect } from 'react-redux';
import { requestMeFromToken } from './Users.actions';
import Users from './Users.component';

const mapStateToProps = state => ({
  meFromToken: state.users.meFromToken.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestMeFromToken: () => {
    dispatch(requestMeFromToken());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
