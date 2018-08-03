import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/Main/Main.component';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/main" component={Main} />
      </Switch>
    );
  }
}

export default Routes;
