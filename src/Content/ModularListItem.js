import React, { Component } from 'react';
import "./PageContent.css";

class ModularListItem extends Component {
  render() {
    return (
      <div className="ModularListItem">
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

export default ModularListItem;
