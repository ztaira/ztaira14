import React, { Component } from 'react';
import "./PageContent.css";

class ModularItem extends Component {
  render() {
    return (
      <div className="ModularItem">
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

export default ModularItem;
