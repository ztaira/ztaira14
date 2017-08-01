import React, { Component } from 'react';
import FavoriteStar from './FavoriteStar.jsx';
import './Project.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.GoToUrl = this.GoToUrl.bind(this);
  }

  GetUSLocaleDateString(project_created_at) {
    let date = new Date(project_created_at).toLocaleString('en-US');;
    return date.slice(0, date.indexOf(','));
  }

  GetProjectColor(language) {
    if (language === 'Python') {
      return {'backgroundColor': '#f9e79f'};
    }
    else if (language === 'C++') {
      return {'backgroundColor': '#a9dfbf'};
    }
    else if (language === 'JavaScript' || language === 'HTML') {
      return {'backgroundColor': '#aed6f1'};
    }
    else {
      return {'backgroundColor': '#f5b7b1'};
    }
  }

  GoToUrl() {
    window.open(this.props.project.html_url);
  }

  render() {
    return (
      <div
        className="Project"
        style={this.GetProjectColor(this.props.project.language)}
        onClick={this.GoToUrl}
      >
        <div>
          <a className="ProjectLink" href={this.props.project.html_url}>
            {this.props.project.name}
          </a>
          <FavoriteStar
            projectName={this.props.project.name}
            starUpdateFunc={this.props.starUpdateFunc}
            starFilterFunc={this.props.starFilterFunc}
          />
        </div>
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
