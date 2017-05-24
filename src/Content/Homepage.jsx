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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu aliquam lectus, vel tristique orci. Nunc pulvinar vehicula metus, at viverra lacus. Sed imperdiet turpis ipsum, sit amet placerat nulla pulvinar ac. Aenean tempor eu purus vitae tincidunt. Nam interdum mauris augue, eget euismod leo luctus vel. Pellentesque suscipit enim elit, vel euismod velit rhoncus ut. Proin ex dui, sollicitudin vel nisi vitae, fringilla rhoncus ante. Vivamus lacinia sollicitudin ligula non dapibus. Nunc odio purus, dignissim in congue at, tempus sed orci. Vestibulum sem sapien, aliquet id feugiat vitae, pulvinar et odio. Pellentesque id tincidunt dolor, sit amet interdum ex. Sed in turpis vel nulla vestibulum vehicula.
            </p>
            <p>
              Nulla rhoncus vestibulum justo a laoreet. Nunc mollis, mauris at scelerisque mollis, erat nibh finibus sapien, id lacinia felis lectus a elit. Morbi sollicitudin est neque. Vestibulum dignissim elit metus, vel posuere diam condimentum ut. Donec non cursus purus, id pulvinar felis. Etiam maximus metus elit, eu aliquet ipsum dignissim in. Donec porta et libero vitae porta. Aliquam nec tristique lorem, at laoreet diam. Vestibulum metus turpis, placerat sit amet faucibus ac, ultrices ac lectus. Sed dignissim et diam eu egestas.
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
