import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import './App.css';
import SideBar from "./SideBar/SideBar.js";
import MenuBar from './MenuBar/MenuBar.js';
import Homepage from "./Content/Homepage.js";
import PageNotFound from "./Content/PageNotFound.js";
import ModularItemPage from "./Content/ModularItemPage.js";
import ModularListPage from "./Content/ModularListPage.js";
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
        'thing5',
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
      listitems: [
        "List item 1",
        "Another list item",
        "Thingamajigger",
        "jabberwock",
        "blahblahblahblah",
        "loock it's a mock",
        "man i'm getting tired",
        "of all these example texts",
        "so many",
        "i'm getting tired of typing",
        "darn it",
        "almost done",
        "finally! i'm done!",
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
          <Route path="/thing2" component={() => <ModularItemPage items={this.state.modularitems} />} />
          <Route path="/thing3" component={() => <ModularListPage items={this.state.listitems} />} />
          <Route path="/thing4" component={() => <Page url="https://raw.githubusercontent.com/ztaira14/abacus/master/README.md" />} />
          <Route path="/thing5" component={PageNotFound} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
