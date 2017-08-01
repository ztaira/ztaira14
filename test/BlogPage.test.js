import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import BlogPage from '../src/Blog/BlogPage.jsx';

it('has not changed since the last snapshot', function() {
  const blogpage = renderer.create(
    <HashRouter>
      <BlogPage allEntries={[
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
  let blogpage_json = blogpage.toJSON();
  expect(blogpage_json).toMatchSnapshot();
});
