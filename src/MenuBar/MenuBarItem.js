import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MenuBarItem extends Component {
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
        <span onClick={this.ChangeAppPage}>
          <Link to={"/"+this.props.text}>{
            this.props.text
          }</Link>
        </span>
      </li>
    );
  }
}

export default MenuBarItem;
