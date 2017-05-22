import React, { Component } from 'react';
import './PageContent.css';

class ModularItemFilter extends Component {
  render() {
    return (
      <a onClick={this.props.filter}>{this.props.label}</a>
    );
  }
}

export default ModularItemFilter;
