import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MenuBarItem extends Component {
  render() {
    return (
      <li>
        <Link to={"/"+this.props.text}>{this.props.text}</Link>
      </li>
    );
  }
}

export default MenuBarItem;
