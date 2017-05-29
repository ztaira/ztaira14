import React, { Component } from 'react';
import ProjectFilter from './ProjectFilter.jsx';

class MutuallyExclusiveFilterList extends Component {
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
      <div className="ModularPageFilters">
        {this.props.buttons.map(this.ReturnButton)}
      </div>
    );
  }
}

export default MutuallyExclusiveFilterList;
