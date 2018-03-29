import React, { Component } from 'react';
import './Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="HomePageContent">
          <div className="Bio">
            <img
              className="ProfilePic"
              src='https://avatars0.githubusercontent.com/u/6549364?v=3'
              alt=""
            />
            <h1>Zachary Taira</h1>
            <p>zach.taira@gmail.com</p>
            <p>EE at NEU</p>
            <div className="RightColumnSpacer" />
          </div>
          <div className="Intro">
            <p>
              Hello, and welcome!
            </p>
            <p>
              My name is Zachary Taira. I'm an EE student at Northeastern
              University, and I built this site in order to document my
              coding journey. You can see some of my other projects
              under the Projects page.
            </p>
            <p>
              If you want some more info about this site, it's Hack-A-Week 19
              under the Projects page. Happy browsing!
            </p>
            <p>Zach</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
