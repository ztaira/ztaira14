import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import EssaysPage from '../src/Content/EssaysPage.jsx';

it('has not changed since the last snapshot', function() {
  const essayspage = renderer.create(
    <HashRouter>
      <EssaysPage allEntries={[
        {
          'name': 'Hello Again, world!',
          'description': 'Testing',
          'file_name': 'hello_again_world.md',
          'create_date': '2017-05-29'
        },
        {
          'name': 'Hello World',
          'description': 'Testing',
          'file_name': 'hello_world.md',
          'create_date': '2017-05-29'
        }
      ]} />
    </HashRouter>
  );
  let essayspage_json = essayspage.toJSON();
  expect(essayspage_json).toMatchSnapshot();
});
