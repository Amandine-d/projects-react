import React from 'react';
import BackwardCounter from './components/BackwardCounter';
import ForwardCounter from './components/ForwardCounter';

function CustomHooksApp() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default CustomHooksApp;