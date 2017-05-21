import React, { Component } from 'react';
import './PageContent.css';
import ModularListItem from './ModularListItem.jsx';

class ModularListPage extends Component {
  constructor(props) {
    super(props);
    this.ReturnModularListItem = this.ReturnModularListItem.bind(this);
  }

  ReturnModularListItem(item) {
    return <ModularListItem key={item} text={item} />;
  }

  render() {
    return (
      <div className="ModularListContent">
        {this.props.items.map(this.ReturnModularListItem)}
      </div>
    );
  }
}

export default ModularListPage;
