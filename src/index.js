import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

var root = document.getElementById('root');

while (root.firstChild) {
  root.removeChild(root.firstChild);
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
