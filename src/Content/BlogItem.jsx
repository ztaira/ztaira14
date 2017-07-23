import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BlogItem.css';

class BlogItem extends Component {
  render() {
    return (
      <div className="BlogItem">
        <p
          className="BlogItemDate">
          {this.props.entry.create_date}
        </p>
        <Link
          className="BlogItemLink"
          to={"/Blog/" + this.props.entry.file_name.slice(0, -3)}>
          {this.props.entry.name}
        </Link>
        <p className="BlogItemDescription">
          {this.props.entry.description}
        </p>
      </div>
    );
  }
}

export default BlogItem;
