import React, { Component } from 'react';
import './ProjectFilter.css';

class ProjectFilter extends Component {
  render() {
    return (
      <button
        id={this.props.button.label}
        className="ProjectFilter"
        onClick={() => {
          this.props.muExBtnFunc(this.props.button.label);
          this.props.button.updateFunction(this.props.button.updateArgument);
          this.props.modalToggleFunc();
        }}
        style={this.props.button.state ? {
          "borderColor": "#666666",
          "color": "#ffffff",
          "backgroundColor": "#666666",
        } : {}}>
        {this.props.button.label}
      </button>
    );
  }
}

export default ProjectFilter;
