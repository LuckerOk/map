import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
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
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="username"
            label="Username"
            className={classes.textField}
            inputRef={(username) => { this.username = username; }}
            margin="normal"
          />
          <TextField
            id="password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            inputRef={(password) => { this.password = password; }}
            margin="normal"
          />
          <TextField
            id="firstName"
            label="First Name"
            className={classes.textField}
            inputRef={(firstName) => { this.firstName = firstName; }}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            className={`form--right ${classes.button}`}
            onClick={() => this.handleClick()}
          >
            Sign Up
          </Button>
          <Link className="form--right" to="/signin">
            Already have an account?
          </Link>
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onRegistrationClick: PropTypes.func.isRequired
};

export default withStyles(styles)(SignUpForm);
