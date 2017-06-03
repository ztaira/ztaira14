import React, { Component } from 'react';
import { Route, browserHistory, HashRouter } from 'react-router-dom';
import './App.css';
import SideBar from './SideBar/SideBar.jsx';
import MenuBar from './MenuBar/MenuBar.jsx';
import Homepage from './Content/Homepage.jsx';
import ProjectsPage from './Content/ProjectsPage.jsx';
import ModularListPage from './Content/ModularListPage.jsx';
import Page from './Content/Page.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuitems: [
        'Home',
        'Projects',
        'Essays',
      ],
      sidebaritems: [
        {
          'label': 'GitHub',
          'link': 'https://github.com/ztaira14',
          'image': 'https://simpleicons.org/icons/github.svg',
        },
        {
          'label': 'LinkedIn',
          'link': 'https://www.linkedin.com/in/zacharytaira/',
          'image': 'https://simpleicons.org/icons/linkedin.svg',
        },
      ],
      allEntries: [],
    }
  }

// ===========================================================================
// GET THE REPOSITORY DATA FROM GITHUB
// ===========================================================================

  componentDidMount() {
    this.GetText('https://raw.githubusercontent.com/ztaira14/journal/master/index.json');
  }

  componentWillUnmount() {
    this.xhp.abort();
  }

  GetText(url) {
    let _this = this;
    this.xhp = new XMLHttpRequest();
    this.xhp.onload = function() {
      _this.setState({
        allEntries: JSON.parse(this.responseText),
      });
    };
    this.xhp.open('GET', url);
    this.xhp.send();
  }

  ReturnListRoutes(entry) {
    let url = 'https://raw.githubusercontent.com/ztaira14/journal/master/';
    return (
      <Route
        key={entry.file_name}
        path={"/Essays/" + entry.file_name.slice(0, -3)}
        component={() => <Page
          url={url + entry.file_name}
        />}
      />)
  }

  render() {
    return (
      <HashRouter history={browserHistory}>
        <div className="App">
          <SideBar menuitems={this.state.sidebaritems} />
          <MenuBar menuitems={this.state.menuitems} />
          <Route exact path="/" component={Homepage} />
          <Route path="/Home" component={Homepage} />
          <Route path="/Projects" component={ProjectsPage} />
          <Route
            exact
            path="/Essays"
            component={() => <ModularListPage
              allEntries={this.state.allEntries}
            />}
          />
          {this.state.allEntries.map(this.ReturnListRoutes)}
        </div>
      </HashRouter>
    );
  }
}

export default App;
