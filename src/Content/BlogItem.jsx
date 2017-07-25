import React, { Component } from 'react';
import Page from './Page.jsx';
import BlogActiveButtons from './BlogActiveButtons.jsx';
import './BlogItem.css';

class BlogItem extends Component {
  constructor(props) {
    super(props);
    this.TogglePost = this.TogglePost.bind(this);
    this.state = {
      active: false,
      text: 'Loading...',
    }
  }

  TogglePost() {
    this.setState({'active': !this.state.active});
  }

  render() {
    if (!this.state.active) {
      return (
        <a
          className="BlogItem"
          onClick={this.TogglePost}
        >
          <div className="BlogItemLeftInfo">
            <div className="BlogItemLink">
              {this.props.entry.file_name.slice(0, -3)}
            </div>
            <p className="BlogItemDescription">
              {this.props.entry.description}
            </p>
          </div>
          <p
            className="BlogItemDate">
            {this.props.entry.create_date}
          </p>
        </a>
      );
    }
    else {
      let url = 'https://raw.githubusercontent.com/ztaira14/journal/master/';
      return (
        <div className="BlogItem" >
          <BlogActiveButtons
            togglePost={this.TogglePost}
            entry={this.props.entry}
          />
          <Page
            url={url + this.props.entry.file_name}
          />
          <BlogActiveButtons
            togglePost={this.TogglePost}
            entry={this.props.entry}
          />
        </div>
      );
    }
  }
}

export default BlogItem;
