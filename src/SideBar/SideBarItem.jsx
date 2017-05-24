import React, { Component } from 'react';

class SideBarItem extends Component {
  render() {
    return (
      <li>
        <a href={this.props.sidebaritem.link}>
          <img
            src={this.props.sidebaritem.image}
            alt={this.props.sidebaritem.label}
          />
        </a>
      </li>
    );
  }
}

export default SideBarItem;
