import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ProjectFilterList from '../src/Content/ProjectFilterList.jsx';

beforeEach(function() {
  let buttons = [
    {
      'label': 'A-Z',
      'updateFunction': () => {},
      'state': true,
      'updateArgument': () => {},
    },
    {
      'label': 'Z-A',
      'updateFunction': () => {},
      'state': false,
      'updateArgument': () => {},
    },
    {
      'label': 'Newest',
      'updateFunction': () => {},
      'state': false,
      'updateArgument': () => {},
    },
    {
      'label': 'Oldest',
      'updateFunction': () => {},
      'state': false,
      'updateArgument': () => {},
    },
  ];

  this.projectfilterlist = ReactDOM.render(
    <ProjectFilterList
      name={"Sort"}
      muExBtnFunc={() => {}}
      buttons={buttons}
    />,
    document.body.appendChild(document.createElement('div'))
  );
});

it('has a function to toggle whether the modal is active or not', function() {
  expect(this.projectfilterlist.state.active).toBe(false);
  this.projectfilterlist.ToggleModalOn();
  expect(this.projectfilterlist.state.active).toBe(true);
  this.projectfilterlist.ToggleModalOff();
  expect(this.projectfilterlist.state.active).toBe(false);
});
