import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import './App.css';
import MenuBar from './MenuBar/MenuBar.js';
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
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Redirect from="/" to="/home" />
          <MenuBar setstate={this.setState.bind(this)} menuitems={this.state.menuitems}/>
          <Route path="/home" component={Homepage} />
          <Route path="/thing2" component={PageNotFound} />
          <Route path="/thing3" component={PageNotFound} />
          <Route path="/thing4" component={Page} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
