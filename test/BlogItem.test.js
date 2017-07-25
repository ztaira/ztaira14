import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import BlogItem from '../src/Content/BlogItem.jsx';

it('has not changed since the last snapshot', () => {
  let entry = {
    'file_name': "It's a test!",
    'description': "The description, however long, goes here",
    'create_date': '2016-04-10T04:20:26Z'
  }
  const blogitem = renderer.create(
    <BlogItem entry={entry} />
  );

  let blogitem_json = blogitem.toJSON();
  expect(blogitem_json).toMatchSnapshot();
  
  // todo: try and toggle the state
});
