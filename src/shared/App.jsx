import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.component';

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
