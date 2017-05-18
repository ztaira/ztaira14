import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SideBarItem extends Component {
  constructor(props) {
    super(props);
    this.ChangeAppPage = this.ChangeAppPage.bind(this);
  }

  ChangeAppPage() {
    console.log(this.props.text);
    this.props.setstate({'page': this.props.text});
  }

  render() {
    return (
      <li>
        <Link to={"/"+this.props.text}>{this.props.text}</Link>
      </li>
    );
  }
}

export default SideBarItem;
