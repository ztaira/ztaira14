import React, { Component } from 'react';
import './PageContent.css';

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
            <p>BS/MS at NEU, originally from Honolulu, HI.</p>
            <div className="RightColumnSpacer" />
          </div>
          <div className="Intro">
            <p>
              I built this website in order to learn React.
            </p>
            <br/>
            <p>
              It was fun.
            </p>
            <br/>
            <p>Zach</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
