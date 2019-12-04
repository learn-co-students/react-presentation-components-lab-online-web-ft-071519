import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';
handledClick = () => {
  return (
    <div>
      Hello 
    </div>
  )
}
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.handledClick} />
  </div>,
  document.getElementById('root')
);