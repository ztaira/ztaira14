import React, { Component } from 'react';
import "./PageContent.css";
import ModularItem from "./ModularItem.js";

class ModularItemPage extends Component {
  constructor(props) {
    super(props);
    this.ReturnModularPageItem = this.ReturnModularPageItem.bind(this);
  }

  ReturnModularPageItem(item) {
    return <ModularItem key={item} text={item} />;
  }

  render() {
    return (
      <div className="ModularPageContent">
        {this.props.items.map(this.ReturnModularPageItem)}
      </div>
    )
  }
}

export default ModularItemPage;
