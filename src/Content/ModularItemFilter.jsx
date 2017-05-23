import React, { Component } from 'react';
import './PageContent.css';

class ModularItemFilter extends Component {
  render() {
    return (
      <a
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

export default ModularItemFilter;
