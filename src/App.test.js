import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const app = renderer.create(
    <App />
  );
  let app_json = app.toJSON();
  expect(app_json).toMatchSnapshot();
});
