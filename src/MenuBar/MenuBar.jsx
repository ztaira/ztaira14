import React, { Component } from 'react';
import MenuBarItem from './MenuBarItem.jsx';
import './MenuBar.css';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.ReturnMenuBarItem = this.ReturnMenuBarItem.bind(this);
  }

  ReturnMenuBarItem(item) {
    return <MenuBarItem key={item} text={item} />;
  }

  render() {
    return (
      <ul
        className="MenuBar"
        role="navigation"
      >
        {this.props.menuitems.map(this.ReturnMenuBarItem)}
      </ul>
    );
  }
}

export default MenuBar;
