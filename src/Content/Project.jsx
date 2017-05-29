import React, { Component } from 'react';
import './PageContent.css';

class Project extends Component {
  GetUSLocaleDateString(project_created_at) {
    let date = new Date(project_created_at).toLocaleString('en-US');;
    return date.slice(0, date.indexOf(','));
  }

  render() {
    return (
      <div className="Project">
        <a className="ProjectLink" href={this.props.project.html_url}>
          {this.props.project.name}
        </a>
        <p className="ProjectParagraph">
          {this.props.project.description}
        </p>
        <div>
          <span className="ProjectLanguage">
            {this.props.project.language}
          </span>
          <span className="ProjectDate">
            {this.GetUSLocaleDateString(this.props.project.created_at)}
          </span>
        </div>
      </div>
    );
  }
}

export default Project;
