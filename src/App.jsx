import React, { Component } from 'react';
import { Route, browserHistory, HashRouter, Switch } from 'react-router-dom';
import './App.css';
import MenuBar from './MenuBar/MenuBar.jsx';
import Homepage from './Home/Homepage.jsx';
import ProjectsPage from './Projects/ProjectsPage.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuitems: [
        'Home',
        'Projects',
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

  render() {
    return (
      <HashRouter history={browserHistory}>
        <div className="App">
          <MenuBar menuitems={this.state.menuitems} />
          <Switch>
            <Route exact path="/" component={ProjectsPage} />
            <Route path="/Home" component={Homepage} />
            <Route path="/Projects" component={ProjectsPage} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
