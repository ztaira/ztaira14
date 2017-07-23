import React, { Component } from 'react';
import './ProjectFilter.css';

class ProjectFilter extends Component {
  render() {
    return (
      <a
        className='ProjectFilter'
        onClick={() => {
          this.props.muExBtnFunc(this.props.button.label);
          this.props.button.updateFunction(this.props.button.updateArgument);
        }}
        style={this.props.button.state ? {
          'borderColor': 'rgb(0, 0, 0)',
          'color': 'rgb(0, 0, 0)',
        } : {}}>
        {this.props.button.label}
      </a>
    );
  }
}

export default ProjectFilter;
