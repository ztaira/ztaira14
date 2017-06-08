import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PageContent.css';

class EssaysItem extends Component {
  render() {
    return (
      <div className="EssaysItem">
        <p
          className="EssaysItemDate">
          {this.props.entry.create_date}
        </p>
        <Link
          className="EssaysItemLink"
          to={"/Essays/" + this.props.entry.file_name.slice(0, -3)}>
          {this.props.entry.name}
        </Link>
        <p className="EssaysItemDescription">
          {this.props.entry.description}
        </p>
      </div>
    );
  }
}

export default EssaysItem;
