import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../src/App.jsx';

beforeEach(function() {
  // to mock localStorage
  var localStorageMock = (function() {
    var store = {};
    return {
      getItem: function(key) {
        return store[key];
      },
      setItem: function(key, value) {
        store[key] = value.toString();
      },
      clear: function() {
        store = {};
      },
      removeItem: function(key) {
        delete store[key];
      }
    };
  })();
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });
});

it('has not changed since the last snapshot', () => {
  const app = renderer.create(
    <App />
  );
  let app_json = app.toJSON();
  expect(app_json).toMatchSnapshot();
});

it('has the expected menu items', () => {
  const app = ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  );
  expect(app.state.menuitems).toEqual(['Home', 'Projects']);
});

it('has the expected sidebar items', () => {
  const app = ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div'))
  );
  expect(app.state.sidebaritems).toEqual(
    [
        {
          'label': 'GitHub',
          'link': 'https://github.com/ztaira14',
          'image': 'https://simpleicons.org/icons/github.svg',
        },
        {
          'label': 'LinkedIn',
          'link': 'https://www.linkedin.com/in/zacharytaira/',
          'image': 'https://simpleicons.org/icons/linkedin.svg',
        },
    ]);
});
