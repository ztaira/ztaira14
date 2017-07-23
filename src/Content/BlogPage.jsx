import React, { Component } from 'react';
import BlogItem from './BlogItem.jsx';
import './BlogPage.css';

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.ReturnBlogItem = this.ReturnBlogItem.bind(this);
  }

  ReturnBlogItem(entry) {
    return <BlogItem key={entry.name} entry={entry} />;
  }

  render() {
    return (
      <div className="BlogContent">
        {this.props.allEntries.map(this.ReturnBlogItem)}
        <div className="RightColumnSpacer" />
      </div>
    );
  }
}

export default BlogPage;
