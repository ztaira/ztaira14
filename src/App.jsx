import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
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
        'home',
        'thing2',
        'thing3',
        'thing4',
        'thing5',
      ],
      sidebaritems: [
        {'label': 'lol', 'link': ''},
        {'label': 'foo1', 'link': 'https://github.com/ztaira14'},
        {'label': 'foo2', 'link': 'https://www.google.com'},
        {'label': 'foo3', 'link': 'home'},
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
      <BrowserRouter>
        <div className="App">
          <Redirect from="/" to="/home" />
          <SideBar menuitems={this.state.sidebaritems} />
          <MenuBar menuitems={this.state.menuitems} />
          <Route path="/home" component={Homepage} />
          <Route path="/thing2" component={ModularItemPage} />
          <Route
            path="/thing3"
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
