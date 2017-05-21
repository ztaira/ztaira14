import React, { Component } from 'react';

class SideBarItem extends Component {
  render() {
    return (
      <li>
        <a href={this.props.link}>
          <img
            src={this.props.image}
            alt={this.props.label}
          />
        </a>
      </li>
    );
  }
}

export default SideBarItem;
