import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import './App.css';
import SideBar from "./SideBar/SideBar.js";
import MenuBar from './MenuBar/MenuBar.js';
import Homepage from "./Content/Homepage.js";
import PageNotFound from "./Content/PageNotFound.js";
import ModularItemPage from "./Content/ModularItemPage.js";
import Page from "./Content/Page.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuitems: [
        'home',
        'thing2',
        'thing3',
        'thing4',
      ],
      sidebaritems: [
        {'label': "lol", 'link': ''},
        {'label': "foo1", 'link': 'https://github.com/ztaira14'},
        {'label': "foo2", 'link': 'https://www.google.com'},
        {'label': "foo3", 'link': 'home'},
      ],
      modularitems: [
        "Hello world",
        "Hello world again",
        "blahblahblahblahblahblah lol",
        "Man this is some ugly site",
        "I really hope this gets better",
        "one more",
        "one moore",
        "one mooore",
        "and another",
        "and another!",
      ],
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Redirect from="/" to="/home" />
          <SideBar menuitems={this.state.sidebaritems}/>
          <MenuBar menuitems={this.state.menuitems}/>
          <Route path="/home" component={Homepage} />
          <Route path="/thing2" component={PageNotFound} />
          <Route path="/thing3" component={() => <ModularItemPage items={this.state.modularitems} />} />
          <Route path="/thing4" component={() => <Page url="https://raw.githubusercontent.com/ztaira14/abacus/master/README.md" />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
