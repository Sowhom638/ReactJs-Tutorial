import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const anotherElement = 'Here is another element';
const reactElement = React.createElement(
  'a',
  {href: 'http://google.com', target: '_blank'},
  anotherElement
  )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  reactElement
);

