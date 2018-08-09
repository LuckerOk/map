import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class SignUpForm extends Component {
  handleClick() {
    const username = this.username;
    const password = this.password;
    const firstName = this.firstName;
    const creds = {
      username: username.value.trim(),
      password: password.value.trim(),
      firstName: firstName.value.trim()
    };

    this.props.onRegistrationClick(creds);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Dialog aria-labelledby="form-dialog-title" open>
          <DialogTitle id="form-dialog-title">Registration</DialogTitle>
          <DialogContent className="container-reg">
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
            <TextField
              margin="dense"
              id="firstName"
              label="First Name"
              inputRef={(firstName) => { this.firstName = firstName; }}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Link className="auth-sign-link" to="/signin">
              {'Already have an account?'}
            </Link>
            <Button
              color="primary"
              className={classes.button}
              onClick={() => this.handleClick()}
            >
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onRegistrationClick: PropTypes.func.isRequired
};

export default withStyles(styles)(SignUpForm);
