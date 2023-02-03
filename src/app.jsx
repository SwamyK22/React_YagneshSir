import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function App({ title, desc }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{desc}</h2>
    </div>
  );
}

App.prototype = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};
App.defaultProps = {
  desc: 'N/A',
};
export default App;
