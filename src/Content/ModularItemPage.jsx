import React, { Component } from 'react';
import './PageContent.css';
import ModularItem from './ModularItem.jsx';
import MutuallyExclusiveFilterList from './MutuallyExclusiveFilterList.jsx';

class ModularItemPage extends Component {
  constructor(props) {
    super(props);
    this.SortByAlphabeticalOrder = this.SortByAlphabeticalOrder.bind(this);
    this.SortByReverseAlphabeticalOrder = this.SortByReverseAlphabeticalOrder.bind(this);
    this.FilterByAllLanguages = this.FilterByAllLanguages.bind(this);
    this.FilterByPythonLanguage = this.FilterByPythonLanguage.bind(this);
    this.FilterByJavascriptLanguage = this.FilterByJavascriptLanguage.bind(this);
    this.FilterByCLanguage = this.FilterByCLanguage.bind(this);
    this.ChangeActiveSortButton = this.ChangeActiveSortButton.bind(this);
    this.ChangeActiveFilterButton = this.ChangeActiveFilterButton.bind(this);
    this.state = {
      allProjects: [],
      displayedProjects: [],
      sortButtons: [
        {
          'label': 'A-Z',
          'filter': this.SortByAlphabeticalOrder,
          'state': false,
          'sortFunction': this.SortFunctionAlphabeticalByName,
        },
        {
          'label': 'Z-A',
          'filter': this.SortByReverseAlphabeticalOrder,
          'state': false,
          'sortFunction': this.SortFunctionReverseAlphabeticalByName,
        },
      ],
      filterButtons: [
        {
          'label': 'All',
          'filter': this.FilterByAllLanguages,
          'state': false,
        },
        {
          'label': 'Python',
          'filter': this.FilterByPythonLanguage,
          'state': false,
        },
        {
          'label': 'JavaScript',
          'filter': this.FilterByJavascriptLanguage,
          'state': false,
        },
        {
          'label': 'C++',
          'filter': this.FilterByCLanguage,
          'state': false,
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

// ===========================================================================
// GET THE REPOSITORY DATA FROM GITHUB
// ===========================================================================

  GetText(url) {
    let _this = this;
    this.xhp = new XMLHttpRequest();
    this.xhp.onload = function() {
      _this.setState({
        allProjects: JSON.parse(this.responseText),
        displayedProjects: JSON.parse(this.responseText)
          .filter(_this.RemoveNonSourceRepos)
          .sort(_this.SortFunctionAlphabeticalByName),
      });
    };
    this.xhp.open('GET', url);
    this.xhp.send();
  }

// ===========================================================================
// FILTERING FUNCTIONS
// ===========================================================================

  RemoveNonSourceRepos(project) {
    return project.fork === false;
  }

  RemoveNonCRepos(project) {
    return (project.language === 'C++' || project.language === 'C');
  }

  RemoveNonPythonRepos(project) {
    return project.language === 'Python';
  }

  RemoveNonJavascriptRepos(project) {
    return project.language === 'JavaScript';
  }

  GetActiveSortingFunction() {
    for (let i = 0; i < this.state.sortButtons.length; i++) {
      if (this.state.sortButtons[i].state === true) {
        console.log(this.state.sortButtons[i]);
        return this.state.sortButtons[i].sortFunction;
      }
    }
    return this.SortFunctionAlphabeticalByName;
  }

  FilterByAllLanguages() {
    this.setState({displayedProjects: this.state.allProjects
      .filter(this.RemoveNonSourceRepos)
      .sort(this.GetActiveSortingFunction())});
  }

  FilterByPythonLanguage() {
    this.setState({displayedProjects: this.state.allProjects
      .filter(this.RemoveNonSourceRepos)
      .filter(this.RemoveNonPythonRepos)
      .sort(this.GetActiveSortingFunction())});
  }

  FilterByCLanguage() {
    this.setState({displayedProjects: this.state.allProjects
      .filter(this.RemoveNonSourceRepos)
      .filter(this.RemoveNonCRepos)
      .sort(this.GetActiveSortingFunction())});
  }

  FilterByJavascriptLanguage() {
    this.setState({displayedProjects: this.state.allProjects
      .filter(this.RemoveNonSourceRepos)
      .filter(this.RemoveNonJavascriptRepos)
      .sort(this.GetActiveSortingFunction())});
  }

// ===========================================================================
// SORTING FUNCTIONS
// ===========================================================================

  SortFunctionAlphabeticalByName(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  }

  SortFunctionReverseAlphabeticalByName(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
    return 0;
  }

  SortByAlphabeticalOrder() {
    this.setState({displayedProjects: this.state.displayedProjects
      .sort(this.SortFunctionAlphabeticalByName)});
  }

  SortByReverseAlphabeticalOrder() {
    this.setState({displayedProjects: this.state.displayedProjects
      .sort(this.SortFunctionReverseAlphabeticalByName)});
  }

// ===========================================================================
// BUTTON DISPLAY FUNCTIONS
// ===========================================================================

  ChangeActiveSortButton(button_name) {
    let buttons = this.state.sortButtons;
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].label === button_name) {
        buttons[i].state = true;
      }
      else {
        buttons[i].state = false;
      }
    }
    this.setState({'sortButtons': buttons});
  }

  ChangeActiveFilterButton(button_name) {
    let buttons = this.state.filterButtons;
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].label === button_name) {
        buttons[i].state = true;
      }
      else {
        buttons[i].state = false;
      }
    }
    this.setState({'filterButtons': buttons});
  }

  ReturnModularPageItem(project) {
    return <ModularItem key={project.name} project={project} />;
  }

  render() {
    return (
      <div className="ModularPageContent">
        <MutuallyExclusiveFilterList
          muExBtnFunc={this.ChangeActiveFilterButton}
          buttons={this.state.filterButtons}
        />
        <MutuallyExclusiveFilterList
          muExBtnFunc={this.ChangeActiveSortButton}
          buttons={this.state.sortButtons}
        />
        {this.state.displayedProjects.map(this.ReturnModularPageItem)}
      </div>
    );
  }
}

export default ModularItemPage;
