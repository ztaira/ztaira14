import React, { Component } from "react";
import SideBarItem from './SideBarItem';
import "./SideBar.css";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.ReturnSideBarItem = this.ReturnSideBarItem.bind(this);
  }

  ReturnSideBarItem(item) {
    return <SideBarItem key={item} setstate={this.props.setstate} text={item} />;
  }

  render() {
    return (
      <ul className="SideBar">{this.props.menuitems.map(this.ReturnSideBarItem)}</ul>
    );
  }
}

export default SideBar;
