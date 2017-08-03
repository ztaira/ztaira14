import React from 'react';
import ReactDOM from 'react-dom';
import { Route, browserHistory, HashRouter, Switch } from 'react-router-dom';
import renderer from 'react-test-renderer';
import BlogItem from '../src/Blog/BlogItem.jsx';

beforeEach(function() {
  this.entry = {
    'name': "Hello, world!",
    'file_name': "hello_world.md",
    'description': "The description, however long, goes here",
    'create_date': '2017-7-25'
  }
  this.blogItem = ReactDOM.render(
    <BlogItem entry={this.entry} openByDefault={false} neverOpen={true}/>,
    document.body.appendChild(document.createElement('div'))
  );
});

it('has not changed since the last snapshot - closed blogitem', function() {
  const blogitem = renderer.create(
    <BlogItem entry={this.entry} />
  );
  let blogitem_json = blogitem.toJSON();
  expect(blogitem_json).toMatchSnapshot();
});

it('has not changed since the last snapshot - open blogitem', function() {
  const blogitem = renderer.create(
    <HashRouter>
      <BlogItem entry={this.entry} openByDefault={true}/>
    </HashRouter>
  );
  let blogitem_json = blogitem.toJSON();
  expect(blogitem_json).toMatchSnapshot();
});

it('has a function to toggle the active state', function() {
  expect(this.blogItem.state['active']).toBe(false);
  this.blogItem.TogglePost();
  expect(this.blogItem.state['active']).toBe(true);
});

it('has some sort of loading text', function() {
  expect(this.blogItem.state['text']).toBe('Loading...');
});
