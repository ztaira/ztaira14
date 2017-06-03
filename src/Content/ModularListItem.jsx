import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PageContent.css';

class ModularListItem extends Component {
  render() {
    return (
      <div className="ModularListItem">
        <p
          className="ModularListItemDate">
          {this.props.entry.create_date}
        </p>
        <Link
          className="ModularListItemLink"
          to={"/Essays/" + this.props.entry.file_name.slice(0, -3)}>
          {this.props.entry.name}
        </Link>
        <p className="ModularListItemDescription">
          {this.props.entry.description}
        </p>
      </div>
    );
  }
}

export default ModularListItem;
