import React, { Component } from 'react';
import './PageContent.css';

class ModularItemFilter extends Component {
  render() {
    return (
      <button onClick={this.props.filter}>{this.props.label}</button>
    );
  }
}

export default ModularItemFilter;
