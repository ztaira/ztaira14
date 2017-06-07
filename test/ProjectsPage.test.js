import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ProjectsPage from '../src/Content/ProjectsPage.jsx';
import ProjectsBackup from '../src/Content/ProjectsBackup.js';
// import ReactTestUtils from 'react-dom/test-utils';

beforeEach(function() {
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
        'state': false,
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
      'state': false,
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
