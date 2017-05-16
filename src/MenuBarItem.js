import React, { Component } from 'react';

class MenuBarItem extends Component {
  constructor(props) {
    super(props);
    this.ChangeAppPage = this.ChangeAppPage.bind(this);
  }

  ChangeAppPage() {
    this.props.setstate({'page': this.props.text});
  }

  render() {
    return (
      <li><span onClick={this.ChangeAppPage}>{this.props.text}</span></li>
    );
  }
}

export default MenuBarItem;
