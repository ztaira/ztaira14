import React, { Component } from 'react';
import ProjectFilter from './ProjectFilter.jsx';
import './ProjectFilterList.css';

class ProjectFilterList extends Component {
  constructor(props) {
    super(props);
    this.ReturnButton = this.ReturnButton.bind(this);
  }
  ReturnButton(button) {
    return (
      <ProjectFilter
        key={button.label}
        button={button}
        muExBtnFunc={this.props.muExBtnFunc}
      />
    );
  }

  render() {
    return (
      <div className="ProjectFilters">
        {this.props.buttons.map(this.ReturnButton)}
      </div>
    );
  }
}

export default ProjectFilterList;
