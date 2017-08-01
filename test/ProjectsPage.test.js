import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ProjectsPage from '../src/Projects/ProjectsPage.jsx';
import ProjectsBackup from '../src/Projects/ProjectsBackup.js';
// import ReactTestUtils from 'react-dom/test-utils';

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

  this.projectspage = ReactDOM.render(
    <ProjectsPage />,
    document.body.appendChild(document.createElement('div'))
  );
});

it('has not changed since the last snapshot', function() {
  const projectspage = renderer.create(
    <ProjectsPage />
  );
  let projectspage_json = projectspage.toJSON();
  expect(projectspage_json).toMatchSnapshot();
});

it('contains the expected sort buttons', function() {
  expect(this.projectspage.state.sortButtons).toEqual(
    [
      {
        'label': 'A-Z',
        'updateFunction': this.projectspage.UpdateDisplayedProjectsOnSortButtonClick,
        'state': true,
        'updateArgument': this.projectspage.SortFunctionAlphabeticalByName,
      },
      {
        'label': 'Z-A',
        'updateFunction': this.projectspage.UpdateDisplayedProjectsOnSortButtonClick,
        'state': false,
        'updateArgument': this.projectspage.SortFunctionReverseAlphabeticalByName,
      },
      {
        'label': 'Newest',
        'updateFunction': this.projectspage.UpdateDisplayedProjectsOnSortButtonClick,
        'state': false,
        'updateArgument': this.projectspage.SortFunctionNewestDateFirst,
      },
      {
        'label': 'Oldest',
        'updateFunction': this.projectspage.UpdateDisplayedProjectsOnSortButtonClick,
        'state': false,
        'updateArgument': this.projectspage.SortFunctionOldestDateFirst,
      },
    ]);
});

it('contains the expected filter buttons', function() {
  expect(this.projectspage.state.filterButtons).toEqual(
  [
    {
      'label': 'All',
      'updateFunction': this.projectspage.UpdateDisplayedProjectsOnFilterButtonClick,
      'state': true,
      'updateArgument': this.projectspage.RemoveNonSourceRepos,
    },
    {
      'label': 'Python',
      'updateFunction': this.projectspage.UpdateDisplayedProjectsOnFilterButtonClick,
      'state': false,
      'updateArgument': this.projectspage.RemoveNonPythonRepos,
    },
    {
      'label': 'JavaScript',
      'updateFunction': this.projectspage.UpdateDisplayedProjectsOnFilterButtonClick,
      'state': false,
      'updateArgument': this.projectspage.RemoveNonJavascriptRepos,
    },
    {
      'label': 'C++',
      'updateFunction': this.projectspage.UpdateDisplayedProjectsOnFilterButtonClick,
      'state': false,
      'updateArgument': this.projectspage.RemoveNonCRepos,
    },
    {
      'label': 'Misc',
      'updateFunction': this.projectspage.UpdateDisplayedProjectsOnFilterButtonClick,
      'state': false,
      'updateArgument': this.projectspage.RemovePythonJavascriptCRepos,
    },
    {
      'label': 'Hack-A-Week',
      'updateFunction': this.projectspage.UpdateDisplayedProjectsOnFilterButtonClick,
      'state': false,
      'updateArgument': this.projectspage.RemoveNonHackAWeekRepos,
    },
    {
      'label': 'Starred',
      'updateFunction': this.projectspage.UpdateDisplayedProjectsOnFilterButtonClick,
      'state': false,
      'updateArgument': this.projectspage.RemoveNonStarredRepos,
    },
  ]);
});

it('has a working filter function to remove non source repos', function() {
  let project = { fork: false };
  expect(this.projectspage.RemoveNonSourceRepos(project)).toBe(true);
  project.fork = true;
  expect(this.projectspage.RemoveNonSourceRepos(project)).toBe(false);
});

it('has a working filter function to remove non C repos', function() {
  let project = { language: 'C++' };
  expect(this.projectspage.RemoveNonCRepos(project)).toBe(true);
  project.language = 'C';
  expect(this.projectspage.RemoveNonCRepos(project)).toBe(true);
  project.language = 'Python';
  expect(this.projectspage.RemoveNonCRepos(project)).toBe(false);
});

it('has a working filter function to remove non Python repos', function() {
  let project = { language: 'Python' };
  expect(this.projectspage.RemoveNonPythonRepos(project)).toBe(true);
  project.language = 'Javascript';
  expect(this.projectspage.RemoveNonPythonRepos(project)).toBe(false);
});

it('has a working filter function to remove non Javascript repos', function() {
  let project = { language: 'JavaScript' };
  expect(this.projectspage.RemoveNonJavascriptRepos(project)).toBe(true);
  project.language = 'Python';
  expect(this.projectspage.RemoveNonJavascriptRepos(project)).toBe(false);
});

it('has a working filter function to remove Python/JS/C repos', function() {
  let project = { language: 'Python' };
  expect(this.projectspage.RemovePythonJavascriptCRepos(project)).toBe(false);
  project.language = 'JavaScript';
  expect(this.projectspage.RemovePythonJavascriptCRepos(project)).toBe(false);
  project.language = 'C';
  expect(this.projectspage.RemovePythonJavascriptCRepos(project)).toBe(false);
  project.language = 'C++';
  expect(this.projectspage.RemovePythonJavascriptCRepos(project)).toBe(false);
  project.language = '';
  expect(this.projectspage.RemovePythonJavascriptCRepos(project)).toBe(true);
});

it('has a working filter function to remove non Hack-A-Week repos', function() {
  let project = { description: 'Hack-A-Week thing' };
  expect(this.projectspage.RemoveNonHackAWeekRepos(project)).toBe(true);
  project.description = 'Hello world';
  expect(this.projectspage.RemoveNonHackAWeekRepos(project)).toBe(false);
});

it('has a working filter function to remove non-starred repos', function() {
  let project = {
    name: 'example_Project',
    fork: false,
  };
  let buttons = this.projectspage.state.filterButtons;

  // if the active filter is not 'starred', the function should return true
  // whatever the current active filter should return true

  // this should always return true since the current active function is 'All'
  expect(this.projectspage.RemoveNonStarredRepos(project)).toBe(true);
  window.localStorage.setItem(project.name, 'is really cool');
  expect(this.projectspage.RemoveNonStarredRepos(project)).toBe(true);

  buttons[0].state = false;
  buttons[6].state = true;
  // note: setState is asynchronous so this might break at some point
  this.projectspage.setState({ 'filterButtons': buttons });

  // now, since the active filter is 'Starred', the function should return
  // false when the item in localStorage is removed
  expect(this.projectspage.RemoveNonStarredRepos(project)).toBe(true);
  window.localStorage.removeItem(project.name);
  expect(this.projectspage.RemoveNonStarredRepos(project)).toBe(false);
});

it('has a working alphabetical sort function', function() {
  let a = { name: 'a' };
  let b = { name: 'b' };
  expect(this.projectspage.SortFunctionAlphabeticalByName(a, b))
    .toBe(-1);
  a.name = 'c';
  expect(this.projectspage.SortFunctionAlphabeticalByName(a, b))
    .toBe(1);
  b.name = 'c';
  expect(this.projectspage.SortFunctionAlphabeticalByName(a, b))
    .toBe(0);
  a.name = '1';
  expect(this.projectspage.SortFunctionAlphabeticalByName(a, b))
    .toBe(-1);
});

it('has a working reverse alphabetical sort function', function() {
  let a = { name: 'a' };
  let b = { name: 'b' };
  expect(this.projectspage.SortFunctionReverseAlphabeticalByName(a, b))
    .toBe(1);
  a.name = 'c';
  expect(this.projectspage.SortFunctionReverseAlphabeticalByName(a, b))
    .toBe(-1);
  b.name = 'c';
  expect(this.projectspage.SortFunctionReverseAlphabeticalByName(a, b))
    .toBe(0);
  a.name = '1';
  expect(this.projectspage.SortFunctionReverseAlphabeticalByName(a, b))
    .toBe(1);
});

it('has a working newest-first sort function', function() {
  let a = { created_at: '2017-03-19T13:29:14Z'};
  let b = { created_at: '2016-04-10T04:20:26Z'};
  expect(this.projectspage.SortFunctionNewestDateFirst(a, b)).toBe(-1);
  b.created_at = '2017-03-19T13:29:14Z';
  a.created_at = '2016-04-10T04:20:26Z';
  expect(this.projectspage.SortFunctionNewestDateFirst(a, b)).toBe(1);
  b.created_at = '2016-04-10T04:20:26Z';
  expect(this.projectspage.SortFunctionNewestDateFirst(a, b)).toBe(0);
});

it('has a working oldest-first sort function', function() {
  let a = { created_at: '2017-03-19T13:29:14Z'};
  let b = { created_at: '2016-04-10T04:20:26Z'};
  expect(this.projectspage.SortFunctionOldestDateFirst(a, b)).toBe(1);
  b.created_at = '2017-03-19T13:29:14Z';
  a.created_at = '2016-04-10T04:20:26Z';
  expect(this.projectspage.SortFunctionOldestDateFirst(a, b)).toBe(-1);
  b.created_at = '2016-04-10T04:20:26Z';
  expect(this.projectspage.SortFunctionOldestDateFirst(a, b)).toBe(0);
});

it('has a working function to change the active filter button', function() {
  for (let i = 0; i < this.projectspage.state.filterButtons.length; i++) {
    this.projectspage.ChangeActiveFilterButton(this.projectspage.state.filterButtons[i].label);
    for (let j = 0; j < this.projectspage.state.filterButtons.length; j++) {
      if (i == j) {
        expect(this.projectspage.state.filterButtons[j].state).toBe(true);
      }
      else {
        expect(this.projectspage.state.filterButtons[j].state).toBe(false);
      }
    }
  }
});

it('has a working function to change the active sort button', function() {
  for (let i = 0; i < this.projectspage.state.sortButtons.length; i++) {
    this.projectspage.ChangeActiveSortButton(this.projectspage.state.sortButtons[i].label);
    for (let j = 0; j < this.projectspage.state.sortButtons.length; j++) {
      if (i == j) {
        expect(this.projectspage.state.sortButtons[j].state).toBe(true);
      }
      else {
        expect(this.projectspage.state.sortButtons[j].state).toBe(false);
      }
    }
  }
});

it('has a working function to get the active sorting function', function() {
  expect(this.projectspage.SortFunctionAlphabeticalByName)
    .toBe(this.projectspage.GetActiveSortingFunction());
  for (let i = 0; i < this.projectspage.state.sortButtons.length; i++) {
    this.projectspage.ChangeActiveSortButton(this.projectspage.state.sortButtons[i].label);
    expect(this.projectspage.state.sortButtons[i].updateArgument)
      .toBe(this.projectspage.GetActiveSortingFunction());
  }
});
