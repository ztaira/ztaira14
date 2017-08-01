import React, { Component } from 'react';
import ProjectFilter from './ProjectFilter.jsx';
import './ProjectFilterList.css';

class ProjectFilterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  ReturnButton = (button) => {
    return (
      <ProjectFilter
        key={button.label}
        button={button}
        muExBtnFunc={this.props.muExBtnFunc}
        modalToggleFunc={this.ToggleModal}
      />
    );
  }

  ReturnModal = () => {
    console.log(this.state.active);
    if (this.state.active) {
      return (
        <div
          className="ModalBackground"
          style={{"width": window.innerWidth, "height": window.innerHeight}}
        >
          <div className="ProjectFilters">
            {this.props.buttons.map(this.ReturnButton)}
          </div>
        </div>
      );
    }
  }

  ToggleModal = (e) => {
    this.setState({'active': !this.state.active});
  }

  render() {
    return (
      <div>
        <button
          onClick={this.ToggleModal}
        >
          {this.props.name}
        </button>
        {this.ReturnModal()}
      </div>
    );
  }
}

export default ProjectFilterList;
