import React, { Component } from 'react';
import './PageContent.css';
import ModularItem from './ModularItem.jsx';
import ModularItemFilter from './ModularItemFilter.jsx';

class ModularItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allProjects: [],
      displayedProjects: [],
      filterButtons: [
        {
          'label': 'A-Z',
          'filter': this.FilterByAlphabeticalOrder.bind(this),
        },
        {
          'label': 'Z-A',
          'filter': this.FilterByReverseAlphabeticalOrder.bind(this),
        },
      ],
    }
  }

  componentDidMount() {
    this.GetText('https://api.github.com/users/ztaira14/repos');
  }

  componentWillUnmount() {
    this.xhp.abort();
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

  FilterByAlphabeticalOrder() {
    console.log("a-z");
    this.setState({displayedProjects: this.state.allProjects.filter(this.GetSourceRepos)});
  }

  FilterByReverseAlphabeticalOrder() {
    console.log("z-a");
    this.setState({displayedProjects: this.state.allProjects.filter(this.GetSourceRepos).reverse()});
  }

  ReturnModularPageItem(project) {
    return <ModularItem key={project.name} project={project} />;
  }

  ReturnFilterButton(filterButton) {
    return (
      <ModularItemFilter
        key={filterButton.label}
        filter={filterButton.filter}
        label={filterButton.label}
      />
    );
  }

  render() {
    return (
      <div className="ModularPageContent">
        <div className="ModularPageFilters">
          {this.state.filterButtons.map(this.ReturnFilterButton)}
        </div>
        {this.state.displayedProjects.map(this.ReturnModularPageItem)}
      </div>
    );
  }
}

export default ModularItemPage;
