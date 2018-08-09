import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class SignInForm extends Component {
  handleClick() {
    const username = this.username;
    const password = this.password;
    const creds = { username: username.value.trim(), password: password.value.trim() };
    this.props.onLoginClick(creds);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Dialog aria-labelledby="form-dialog-title" open>
          <DialogTitle id="form-dialog-title">Authorization</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="username"
              label="Username"
              inputRef={(username) => { this.username = username; }}
              fullWidth
            />
            <TextField
              margin="dense"
              id="password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              inputRef={(password) => { this.password = password; }}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Link className="auth-sign-link" to="/signup">
              {'Don\'t have an account?'}
            </Link>
            <Button
              color="primary"
              className={classes.button}
              onClick={() => this.handleClick()}
            >
              Sign In
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

SignInForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onLoginClick: PropTypes.func.isRequired
};

export default withStyles(styles)(SignInForm);
