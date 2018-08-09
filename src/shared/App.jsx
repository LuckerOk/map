import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.container';

const App = props => (
  <div>
    <Header />
    <div>
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
