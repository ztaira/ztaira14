import React, { Component } from 'react';
import './PageContent.css';

class Homepage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="HomePageContent">
          <div />
          <div />
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
              a single component rather than the entire webpage. So, from a
              developer standpoint, React is awesome.
            </p>
            <p>
              <b>What I didn't like:</b> When I tested the development build
              on an artificially throttled 50 kilobit/s connection via Chrome's
              developer tools, it took approximately 50 seconds to finish
              loading a 300 kilobyte bundle.js file. This was made much
              better in the production build, but even then the 70+ kilobyte
              javascript file still took 12.65 seconds to load. By comparison,
              danluu's blog post on web bloat loaded in under three seconds at
              the same 50 kilobit/s connection speed.
            </p>
            <p>
              I suppose it's fine since on my wi-fi everything loads in well under
              half a second, but the delay still bugs me. Definitely something
              to fix later.
            </p>
            <p>Zach</p>
          </div>
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default Homepage;
