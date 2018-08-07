import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Map from './pages/Map/Map.component';
import Login from './pages/Auth/components/Login.container';
import Registration from './pages/Auth/components/Registration.container';
import Users from './pages/Profile/Users.container';

import { isAuth } from './services/authManager';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/main" component={Map} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Registration} />
        <PrivateRoute path="/profile" component={Users} />
      </Switch>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => ( // eslint-disable-line no-shadow
  <Route
    {...rest}
    render={props =>
      (isAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            from: props.location
          }}
        />
      ))
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object
};
PrivateRoute.defaultProps = {
  location: {}
};

export default Routes;
