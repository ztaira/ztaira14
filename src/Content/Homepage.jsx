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
            <p>BS/MS at NEU</p>
            <div className="RightColumnSpacer" />
          </div>
          <div className="Intro">
            <p>
              Hi, my name is Zachary Taira.
            </p>
            <p>
              <b>Why I made this:</b> Since last summer, my goal has been to
              complete a bunch of different time-boxed projects in order to learn
              more about various technologies and get used to actually finishing
              the side projects I start. This is Hack-A-Week 19, and I built
              it in order to learn React.  
            </p>
            <p>
              <b>What I liked:</b> The component-based architecture of React makes
              it very easy to break up your massive HTML document into 
              small, intuitive components. As a result, creating a layout
              is much easier, since you only have to remember state and props for
              a single component rather than the entire webpage.
            </p>
            <p>
              <b>What I didn't like:</b> While the javascript is loading, the
              initial page is noticeably blank. This isn't really a problem
              with fast internet speeds, but it was extremely noticeable when
              I artificially throttled the network via Chrome's developer tools.
              I think it'd be pretty cool if the bundling process also automatically
              populated the initial HTML file in order to make the initial page
              load feel faster, but that's a project for another day.
            </p>
            <p>Zach</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
