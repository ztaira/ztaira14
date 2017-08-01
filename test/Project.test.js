import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Project from '../src/Projects/Project.jsx';

beforeEach(function() {
  var exampleProject = {
    "name": "abacus",
    "html_url": "https://github.com/ztaira14/abacus",
    "description": "Hack-A-Week 17: An abacus desktop app using electron. ",
    "fork": false,
    "created_at": "2017-03-19T13:29:14Z",
    "updated_at": "2017-06-03T03:10:58Z",
    "language": "JavaScript",
  };

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

  this.project = ReactDOM.render(
    <Project project={exampleProject} />,
    document.body.appendChild(document.createElement('div'))
  );
});

it('has a function to return the correct colors based on project language', function() {
  // Python is yellow
  expect(this.project.GetProjectColor('Python').backgroundColor).toBe('#f9e79f');
  // C++ is green
  expect(this.project.GetProjectColor('C++').backgroundColor).toBe('#a9dfbf');
  // JavaScript and HTML are both light blue
  expect(this.project.GetProjectColor('JavaScript').backgroundColor).toBe('#aed6f1');
  expect(this.project.GetProjectColor('HTML').backgroundColor).toBe('#aed6f1');
  // Everything else is red
  expect(this.project.GetProjectColor('Misc').backgroundColor).toBe('#f5b7b1');
  expect(this.project.GetProjectColor('').backgroundColor).toBe('#f5b7b1');
});
