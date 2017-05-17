import React, { Component } from 'react';
import MenuBarItem from './MenuBarItem';
import './MenuBar.css';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.ReturnMenuBarItem = this.ReturnMenuBarItem.bind(this);
  }

  ReturnMenuBarItem(item) {
    return <MenuBarItem key={item} setstate={this.props.setstate} text={item} />;
  }

  render() {
    return (
      <div className="MenuBar">
        <ul>{
          this.props.menuitems.map(this.ReturnMenuBarItem)
        }</ul>
      </div>
    );
  }
}

export default MenuBar;
