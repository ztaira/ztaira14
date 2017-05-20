import React, { Component } from 'react';
import './PageContent.css';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Loading',
    }
  }

  componentDidMount() {
    this.GetText(this.props.url);
  }

  componentWillUnmount() {
    this.xhp.abort();
  }

  GetText(url) {
    let _this = this;
    this.xhp = new XMLHttpRequest();
    this.xhp.onload = function() {
      _this.setState({text: _this.ProcessText(this.responseText)});
    };
    this.xhp.open('GET', url);
    this.xhp.send();
  }

  ProcessText(text) {
    let text_list = text.split('\n');
    let div_list = [];
    let current_paragraph = '';
    let current_line = '';
    let num_hashtags = '';
    // NOTE:
    // can use index as key because:
    // 1) list and items are static, only loaded once, and not expected to change
    // 2) the items in the list have no ids
    // 3) the list is never reordered or filtered
    // From https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
    // (linked from the airbnb react style guide)
    for (var line=0; line < text_list.length; line++) {
      current_line = text_list[line];
      num_hashtags = (current_line.match(/#/g) || []).length;
      if (num_hashtags > 0) {
        div_list.push(this.ReturnBoldText(current_line, num_hashtags, line));
      }
      else if (current_line !== '') {
        current_paragraph += ' ' + current_line;
      }
      else {
        div_list.push(<p key={line}>{current_paragraph}</p>);
        current_paragraph = '';
      }
    }
    return div_list;
  }

  ReturnBoldText(text, num_hashtags, key) {
    if (num_hashtags === 1) {
      return <h1 key={key}>{text.slice(text.indexOf(' ') + 1)}</h1>;
    }
    else if (num_hashtags === 2) {
      return <h2 key={key}>{text.slice(text.indexOf(' ') + 1)}</h2>;
    }
    else if (num_hashtags === 3) {
      return <h3 key={key}>{text.slice(text.indexOf(' ') + 1)}</h3>;
    }
    else if (num_hashtags === 4) {
      return <h4 key={key}>{text.slice(text.indexOf(' ') + 1)}</h4>;
    }
    else if (num_hashtags === 5) {
      return <h5 key={key}>{text.slice(text.indexOf(' ') + 1)}</h5>;
    }
    else if (num_hashtags === 6) {
      return <h6 key={key}>{text.slice(text.indexOf(' ') + 1)}</h6>;
    }
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
