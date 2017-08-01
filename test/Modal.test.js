import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Modal from '../src/Content/Modal.jsx';

it('has not changed since the last snapshot', () => {
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

  const modal = renderer.create(
    <Modal
      buttons={buttons}
      muExBtnFunc={() => {}}
      modalToggleFunc={() => {}}
    />
  );

  let modal_json = modal.toJSON();
  expect(modal_json).toMatchSnapshot();
})
