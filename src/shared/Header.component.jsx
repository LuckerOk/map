import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  }
};

class Header extends Component {
  render() {
    const { classes, isAuthenticated, onLogoutClick } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Map Application
            </Typography>
            <Button color="inherit" component={Link} to="/main">Map</Button>
            <Button color="inherit" component={Link} to="/profile">Profile</Button>

            {!isAuthenticated &&
              <Button color="inherit" component={Link} to="/signin">Login</Button>
            }

            {isAuthenticated &&
              <Button
                color="inherit"
                onClick={() => onLogoutClick()}
                component={Link}
                to="/signin"
              >
                Logout
              </Button>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onLogoutClick: PropTypes.func.isRequired
};

export default withStyles(styles)(Header);
