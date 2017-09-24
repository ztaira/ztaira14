import React, { Component } from 'react';
import Modal from './Modal.jsx';
import './ProjectFilterList.css';

class ProjectFilterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  ToggleModalOn = () => {
    this.setState({'active': !this.state.active});
  }

  ToggleModalOff = () => {
    this.setState({'active': false});
    let thisButton = document.getElementById(this.props.name);
    thisButton.focus();
  }

  GetActiveButtonName = () => {
    for (let i = 0; i < this.props.buttons.length; i++) {
      if (this.props.buttons[i].state === true) {
        return this.props.buttons[i].label;
      }
    }
  }

  render() {
    return (
      <div>
        <button
          id={this.props.name}
          onClick={this.ToggleModalOn}
          aria-haspopup={true}
        >
          {`${this.props.name} by: ${this.GetActiveButtonName()}`}
        </button>
        <Modal
          buttons={this.props.buttons}
          muExBtnFunc={this.props.muExBtnFunc}
          modalToggleFunc={this.ToggleModalOff}
          active={this.state.active}
        />
      </div>
    );
  }
}

export default ProjectFilterList;
