import React, { Component } from 'react';
import { Route, browserHistory, HashRouter, Switch } from 'react-router-dom';
import './App.css';
import MenuBar from './MenuBar/MenuBar.jsx';
import Homepage from './Home/Homepage.jsx';
import ProjectsPage from './Projects/ProjectsPage.jsx';
import BlogPage from './Blog/BlogPage.jsx';
import Page from './Blog/Page.jsx';
import PageNotFound from './PageNotFound.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuitems: [
        'Home',
        'Projects',
        'Blog',
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
        path={"/Blog/" + entry.file_name.slice(0, -3)}
        component={() => <Page
          url={url + entry.file_name}
        />}
      />)
  }

  render() {
    return (
      <HashRouter history={browserHistory}>
        <div className="App">
          <MenuBar menuitems={this.state.menuitems} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/Home" component={Homepage} />
            <Route path="/Projects" component={ProjectsPage} />
            <Route
              exact
              path="/Blog"
              component={() => <BlogPage
                allEntries={this.state.allEntries}
              />}
            />
            {this.state.allEntries.map(this.ReturnListRoutes)}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
