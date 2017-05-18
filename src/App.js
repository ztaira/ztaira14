import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import './App.css';
import MenuBar from './MenuBar/MenuBar.js';
import SideBar from "./SideBar/SideBar.js";
import Homepage from "./Content/Homepage.js";
import PageNotFound from "./Content/PageNotFound.js";
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
        "lol",
        "foo1",
        "foo2",
        "foo3",
      ],
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Redirect from="/" to="/home" />
          <SideBar setstate={this.setState.bind(this)} menuitems={this.state.sidebaritems}/>
          <MenuBar setstate={this.setState.bind(this)} menuitems={this.state.menuitems}/>
          <Route path="/home" component={Homepage} />
          <Route path="/thing2" component={PageNotFound} />
          <Route path="/thing3" component={() => <Page url="www.example.com" />} />
          <Route path="/thing4" component={() => <Page url="https://raw.githubusercontent.com/ztaira14/abacus/master/README.md" />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
