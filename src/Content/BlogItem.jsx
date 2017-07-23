import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page from './Page.jsx';
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
          <div>
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
          <div className="ActiveBlogButtons" >
            <a
              className="CloseButton"
              onClick={this.TogglePost}
            >
              Close
            </a>
            <Link
              className="CloseButton"
              to={"/Blog/" + this.props.entry.file_name.slice(0, -3)}
            >Go To Bookmarkable Page
            </Link>
          </div>
          <Page
            url={url + this.props.entry.file_name}
          />
          <div className="ActiveBlogButtons" >
            <a
              className="CloseButton"
              onClick={this.TogglePost}
            >
              Close
            </a>
            <Link
              className="CloseButton"
              to={"/Blog/" + this.props.entry.file_name.slice(0, -3)}
            >Go To Bookmarkable Page
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default BlogItem;
