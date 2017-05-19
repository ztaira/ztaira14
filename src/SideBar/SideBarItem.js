import React, { Component } from 'react';

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
        <a href={this.props.link}>{this.props.text}</a>
      </li>
    );
  }
}

export default SideBarItem;
