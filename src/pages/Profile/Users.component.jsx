import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275
  }
};

class Users extends Component {
  componentWillMount() {
    this.props.requestMeFromToken();
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="headline" component="h2">
              Username: {this.props.meFromToken.username}
            </Typography>
            <Typography variant="headline" component="h2">
              First name: {this.props.meFromToken.firstName}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Users.propTypes = {
  requestMeFromToken: PropTypes.func.isRequired,
  meFromToken: PropTypes.object,
  firstName: PropTypes.string,
  username: PropTypes.string,
  classes: PropTypes.object.isRequired
};
Users.defaultProps = {
  meFromToken: {},
  firstName: '',
  username: ''
};

export default withStyles(styles)(Users);
