import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, browserHistory } from 'react-router-dom';
import './App.css';
import SideBar from './SideBar/SideBar.jsx';
import MenuBar from './MenuBar/MenuBar.jsx';
import Homepage from './Content/Homepage.jsx';
import PageNotFound from './Content/PageNotFound.jsx';
import ModularItemPage from './Content/ModularItemPage.jsx';
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
        },
        {
          'label': 'LinkedIn',
          'link': 'https://www.linkedin.com/in/zacharytaira/',
        },
      ],
      listitems: [
        'List item 1',
        'Another list item',
        'Thingamajigger',
        'jabberwock',
        'blahblahblahblah',
        'loock its a mock',
        'man im getting tired',
        'of all these example texts',
        'so many',
        'im getting tired of typing',
        'darn it',
        'almost done',
        'finally! im done!',
      ],
    }
  }

  render() {
    return (
      <BrowserRouter history={browserHistory}>
        <div className="App">
          <SideBar menuitems={this.state.sidebaritems} />
          <MenuBar menuitems={this.state.menuitems} />
          <Redirect from="/" to="/Home" />
          <Route path="/Home" component={Homepage} />
          <Route path="/Projects" component={ModularItemPage} />
          <Route
            path="/Essays"
            component={() => <ModularListPage
              items={this.state.listitems}
            />}
          />
          <Route 
            path="/thing4" 
            component={() => <Page
              url="https://raw.githubusercontent.com/ztaira14/abacus/master/README.md"
            />}
          />
          <Route path="/thing5" component={PageNotFound} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
