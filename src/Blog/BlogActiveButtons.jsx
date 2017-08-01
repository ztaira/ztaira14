import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BlogActiveButtons.css';

class BlogActiveButtons extends Component {
  render() {
    return (
      <div className="BlogActiveButtons" >
        <a
          className="BlogCloseButton BlogButton"
          onClick={this.props.togglePost}
        >
          Close
        </a>
        <Link
          className="BlogLinkButton BlogButton"
          to={"/Blog/" + this.props.entry.file_name.slice(0, -3)}
        >Go To Bookmarkable Page
        </Link>
      </div>
    );
  }
}

export default BlogActiveButtons;
