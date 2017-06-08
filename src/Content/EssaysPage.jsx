import React, { Component } from 'react';
import './PageContent.css';
import EssaysItem from './EssaysItem.jsx';

class EssaysPage extends Component {
  constructor(props) {
    super(props);
    this.ReturnEssaysItem = this.ReturnEssaysItem.bind(this);
  }

  ReturnEssaysItem(entry) {
    return <EssaysItem key={entry.name} entry={entry} />;
  }

  render() {
    return (
      <div className="EssaysContent">
        {this.props.allEntries.map(this.ReturnEssaysItem)}
        <div className="RightColumnSpacer" />
      </div>
    );
  }
}

export default EssaysPage;
