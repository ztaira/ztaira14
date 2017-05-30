import React, { Component } from 'react';
import './PageContent.css';
import ModularListItem from './ModularListItem.jsx';

class ModularListPage extends Component {
  constructor(props) {
    super(props);
    this.ReturnModularListItem = this.ReturnModularListItem.bind(this);
  }

  ReturnModularListItem(entry) {
    console.log(entry);
    return <ModularListItem key={entry.name} entry={entry} />;
  }

  render() {
    console.log(this.state);
    return (
      <div className="ModularListContent">
        {this.props.allEntries.map(this.ReturnModularListItem)}
        <div className="RightColumnSpacer" />
      </div>
    );
  }
}

export default ModularListPage;
