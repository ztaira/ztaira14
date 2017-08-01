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

  ToggleModalOn = (e) => {
    this.setState({'active': true});
  }

  ToggleModalOff = () => {
    this.setState({'active': false});
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
          onClick={this.ToggleModalOn}
        >
          {`${this.props.name} by: ${this.GetActiveButtonName()}`}
        </button>
        {this.state.active ?
          <Modal
            buttons={this.props.buttons}
            muExBtnFunc={this.props.muExBtnFunc}
            modalToggleFunc={this.ToggleModalOff}
          /> :
          null
        }
      </div>
    );
  }
}

export default ProjectFilterList;
