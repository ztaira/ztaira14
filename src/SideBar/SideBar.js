import React, { Component } from "react";
import SideBarItem from './SideBarItem';
import "./SideBar.css";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.ReturnSideBarItem = this.ReturnSideBarItem.bind(this);
  }

  ReturnSideBarItem(item) {
    return <SideBarItem key={item[0]} setstate={this.props.setstate} link={item[1]} text={item[0]} />;
  }

  render() {
    let zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);
    return (
      <ul className="SideBar">{zip(this.props.menuitems, this.props.menulinks).map(this.ReturnSideBarItem)}</ul>
    );
  }
}

export default SideBar;
