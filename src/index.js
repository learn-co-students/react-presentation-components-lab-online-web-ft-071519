import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function sayWooHoo() {
  console.log('WOOOHOOOOOO!');
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={sayWooHoo} />
  </div>,
  document.getElementById('root')
);