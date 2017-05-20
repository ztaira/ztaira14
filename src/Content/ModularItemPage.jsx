import React, { Component } from 'react';
import './PageContent.css';
import ModularItem from './ModularItem.js';

class ModularItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProjects: [],
      displayedProjects: [],
    }
  }

  componentDidMount() {
    this.GetText('https://api.github.com/users/ztaira14/repos');
  }

  GetSourceRepos(project) {
    return project.fork === false;
  }

  GetText(url) {
    let _this = this;
    this.xhp = new XMLHttpRequest();
    this.xhp.onload = function() {
      _this.setState({
        allProjects: JSON.parse(this.responseText),
        displayedProjects: JSON.parse(this.responseText).filter(_this.GetSourceRepos),
      });
    };
    this.xhp.open('GET', url);
    this.xhp.send();
  }

  ReturnModularPageItem(project) {
    return <ModularItem key={project.name} project={project} />;
  }

  componentWillUnmount() {
    this.xhp.abort();
  }

  render() {
    return (
      <div className="ModularPageContent">
        {this.state.displayedProjects.map(this.ReturnModularPageItem)}
      </div>
    )
  }
}

export default ModularItemPage;
