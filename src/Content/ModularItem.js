import React, { Component } from 'react';
import "./PageContent.css";

class ModularItem extends Component {
  GetUSLocaleDateString(project_created_at) {
    let date = new Date(project_created_at).toLocaleString('en-US');;
    console.log(date);
    console.log(typeof(date));
    return date.slice(0, date.indexOf(','));
  }

  render() {
    return (
      <div className="ModularItem">
        <a className='ModularItemLink' href={this.props.project.html_url}>
          {this.props.project.name}
        </a>
        <p className='ModularItemParagraph'>
          {this.props.project.description}
        </p>
        <div>
          <span className='ModularItemLanguage'>
            {this.props.project.language}
          </span>
          <span className='ModularItemDate'>
            {this.GetUSLocaleDateString(this.props.project.created_at)}
          </span>
        </div>
      </div>
    );
  }
}

export default ModularItem;
