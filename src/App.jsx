import React, { Component } from 'react';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';
import './App.css';
import SideBar from './SideBar/SideBar.jsx';
import MenuBar from './MenuBar/MenuBar.jsx';
import Homepage from './Content/Homepage.jsx';
import ModularItemPage from './Content/ModularItemPage.jsx';
import ModularListPage from './Content/ModularListPage.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuitems: [
        'Home',
        'Projects',
        'List',
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
      listitems: [
        'List item 0',
        'List item 1',
        'List item 2',
        'List item 3',
        'List item 4',
        'List item 5',
        'List item 6',
        'List item 7',
        'List item 8',
        'List item 9',
      ],
    }
  }

  render() {
    return (
      <BrowserRouter history={browserHistory}>
        <div className="App">
          <SideBar menuitems={this.state.sidebaritems} />
          <MenuBar menuitems={this.state.menuitems} />
          <Route exact path="/" component={Homepage} />
          <Route path="/Home" component={Homepage} />
          <Route path="/Projects" component={ModularItemPage} />
          <Route
            path="/List"
            component={() => <ModularListPage
              items={this.state.listitems}
            />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
