import React, { Component } from 'react';
import './App.css';
import MenuBar from './MenuBar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuitems: [
        'Home',
        'Projects',
        'Resume',
        'About',
      ],
      page: 'Home',
    }
  }

  render() {
    return (
      <div className="App">
        <MenuBar setstate={this.setState.bind(this)} menuitems={this.state.menuitems}/>
      </div>
    );
  }
}

export default App;
