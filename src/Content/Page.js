import React, { Component } from 'react';
import "./PageContent.css";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Loading",
    }
  }

  componentDidMount() {
    this.GetText(this.props.url);
  }

  GetText(url) {
    let _this = this;
    this.xhp = new XMLHttpRequest();
    this.xhp.onload = function() {
      let data = this.responseText;
      console.log(_this);
      _this.setState({text: data});
    };
    this.xhp.open("GET", url);
    this.xhp.send();
  }

  componentWillUnmount() {
    this.xhp.abort();
  }

  render() {
    return (
      <div className="PageContent">
        {this.state.text}
      </div>
    );
  }
}

export default Page;
