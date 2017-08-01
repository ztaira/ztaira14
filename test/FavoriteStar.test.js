import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import FavoriteStar from '../src/Projects/FavoriteStar.jsx';

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

  var fakeFunction = function() {
    return false;
  }

  this.favoritestar = ReactDOM.render(
    <FavoriteStar
      projectName={'example_Project'}
      starUpdateFunc={fakeFunction}
      starFilterFunc={fakeFunction}
    />,
    document.body.appendChild(document.createElement('div'))
  );
});

it('can set and remove its status in localStorage', function() {
  var fakeEvent = {
    stopPropagation: function() { return false },
  }
  // should start as not a favorite
  expect(this.favoritestar.IsFavorite()).toBe(false);
  expect(window.localStorage.getItem(this.favoritestar.props.projectName)).toBe(undefined);
  expect(this.favoritestar.GetFavoriteStar()).toBe('☆');
  // toggle function should make it a favorite
  this.favoritestar.ToggleFavorite(fakeEvent);
  expect(this.favoritestar.IsFavorite()).toBe(true);
  expect(window.localStorage.getItem(this.favoritestar.props.projectName)).toBe('is really cool');
  expect(this.favoritestar.GetFavoriteStar()).toBe('★');
  // toggle function again should make it not a favorite again
  this.favoritestar.ToggleFavorite(fakeEvent);
  expect(this.favoritestar.IsFavorite()).toBe(false);
  expect(window.localStorage.getItem(this.favoritestar.props.projectName)).toBe(undefined);
  expect(this.favoritestar.GetFavoriteStar()).toBe('☆');
});
