import React, { Component } from 'react';
import Project from './Project.jsx';
import ProjectFilterList from './ProjectFilterList.jsx';
import ProjectsBackup from './ProjectsBackup.js';
import './ProjectsPage.css';

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.UpdateDisplayedProjectsOnSortButtonClick = this.UpdateDisplayedProjectsOnSortButtonClick.bind(this);
    this.UpdateDisplayedProjectsOnFilterButtonClick = this.UpdateDisplayedProjectsOnFilterButtonClick.bind(this);
    this.ChangeActiveSortButton = this.ChangeActiveSortButton.bind(this);
    this.ChangeActiveFilterButton = this.ChangeActiveFilterButton.bind(this);
    this.GetActiveFilterFunction = this.GetActiveFilterFunction.bind(this);
    this.RemoveNonStarredRepos = this.RemoveNonStarredRepos.bind(this);
    this.ReturnModularPageItem = this.ReturnModularPageItem.bind(this);
    this.state = {
      sortButtons: [
        {
          'label': 'A-Z',
          'updateFunction': this.UpdateDisplayedProjectsOnSortButtonClick,
          'state': true,
          'updateArgument': this.SortFunctionAlphabeticalByName,
        },
        {
          'label': 'Z-A',
          'updateFunction': this.UpdateDisplayedProjectsOnSortButtonClick,
          'state': false,
          'updateArgument': this.SortFunctionReverseAlphabeticalByName,
        },
        {
          'label': 'Newest',
          'updateFunction': this.UpdateDisplayedProjectsOnSortButtonClick,
          'state': false,
          'updateArgument': this.SortFunctionNewestDateFirst,
        },
        {
          'label': 'Oldest',
          'updateFunction': this.UpdateDisplayedProjectsOnSortButtonClick,
          'state': false,
          'updateArgument': this.SortFunctionOldestDateFirst,
        },
      ],
      filterButtons: [
        {
          'label': 'All',
          'updateFunction': this.UpdateDisplayedProjectsOnFilterButtonClick,
          'state': true,
          'updateArgument': this.RemoveNonSourceRepos,
        },
        {
          'label': 'Python',
          'updateFunction': this.UpdateDisplayedProjectsOnFilterButtonClick,
          'state': false,
          'updateArgument': this.RemoveNonPythonRepos,
        },
        {
          'label': 'JavaScript',
          'updateFunction': this.UpdateDisplayedProjectsOnFilterButtonClick,
          'state': false,
          'updateArgument': this.RemoveNonJavascriptRepos,
        },
        {
          'label': 'C++',
          'updateFunction': this.UpdateDisplayedProjectsOnFilterButtonClick,
          'state': false,
          'updateArgument': this.RemoveNonCRepos,
        },
        {
          'label': 'Misc',
          'updateFunction': this.UpdateDisplayedProjectsOnFilterButtonClick,
          'state': false,
          'updateArgument': this.RemovePythonJavascriptCRepos,
        },
        {
          'label': 'Hack-A-Week',
          'updateFunction': this.UpdateDisplayedProjectsOnFilterButtonClick,
          'state': false,
          'updateArgument': this.RemoveNonHackAWeekRepos,
        },
        {
          'label': 'Starred',
          'updateFunction': this.UpdateDisplayedProjectsOnFilterButtonClick,
          'state': false,
          'updateArgument': this.RemoveNonStarredRepos,
        },
      ],
      allProjects: ProjectsBackup,
      displayedProjects: ProjectsBackup
        .filter(this.RemoveNonSourceRepos)
        .sort(this.SortFunctionAlphabeticalByName),
    }
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

  RemovePythonJavascriptCRepos(project) {
    return (project.language !== 'JavaScript' &&
        project.language !== 'C' &&
        project.language !== 'C++' &&
        project.language !== 'Python');
  }

  RemoveNonHackAWeekRepos(project) {
    return project.description.slice(0, 11).toLowerCase() === "hack-a-week";
  }

  RemoveNonStarredRepos(project) {
    if (this.state.filterButtons[6].state === true) {
      return window.localStorage.getItem(project.name) ? true : false;
    }
    else {
      return this.GetActiveFilterFunction()(project);
    }
  }

  GetActiveSortingFunction() {
    for (let i = 0; i < this.state.sortButtons.length; i++) {
      if (this.state.sortButtons[i].state === true) {
        return this.state.sortButtons[i].updateArgument;
      }
    }
    return this.SortFunctionAlphabeticalByName;
  }

  UpdateDisplayedProjectsOnFilterButtonClick(filter_function) {
    this.setState({displayedProjects: this.state.allProjects
      .filter(this.RemoveNonSourceRepos)
      .filter(filter_function)
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

  SortFunctionNewestDateFirst(a, b) {
    let d1 = new Date(a.created_at);
    let d2 = new Date(b.created_at);
    if (d1 < d2) return 1;
    if (d1 > d2) return -1;
    return 0;
  }

  SortFunctionOldestDateFirst(a, b) {
    let d1 = new Date(a.created_at);
    let d2 = new Date(b.created_at);
    if (d1 < d2) return -1;
    if (d1 > d2) return 1;
    return 0;
  }

  UpdateDisplayedProjectsOnSortButtonClick(sort_function) {
    this.setState({displayedProjects: this.state.displayedProjects
      .sort(sort_function)});
  }

  GetActiveFilterFunction() {
    for (let i = 0; i < this.state.filterButtons.length; i++) {
      if (this.state.filterButtons[i].state === true) {
        return this.state.filterButtons[i].updateArgument;
      }
    }
    return this.RemoveNonSourceRepos;
  }

// ===========================================================================
// BUTTON STATE FUNCTIONS
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

// ===========================================================================
// RENDER FUNCTIONS
// ===========================================================================

  ReturnModularPageItem(project) {
    return <Project
      key={project.name}
      project={project}
      starUpdateFunc={this.UpdateDisplayedProjectsOnFilterButtonClick}
      starFilterFunc={this.RemoveNonStarredRepos}
    />;
  }

  render() {
    return (
      <div className="ProjectContent">
        <ProjectFilterList
          muExBtnFunc={this.ChangeActiveFilterButton}
          buttons={this.state.filterButtons}
          name={"Filter"}
        />
        <ProjectFilterList
          muExBtnFunc={this.ChangeActiveSortButton}
          buttons={this.state.sortButtons}
          name={"Sort"}
        />
        <div style={{"height": "20px", "width": "100%"}} />
        <div className="ProjectList">
          {this.state.displayedProjects.map(this.ReturnModularPageItem)}
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
