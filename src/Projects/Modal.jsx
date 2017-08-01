import React, { Component } from 'react';
import ProjectFilter from './ProjectFilter.jsx';
import './Modal.css';

class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('resize', this.props.modalToggleFunc);
  }

  ReturnButton = (button) => {
    return (
      <ProjectFilter
        key={button.label}
        button={button}
        muExBtnFunc={this.props.muExBtnFunc}
        modalToggleFunc={this.props.modalToggleFunc}
      />
    );
  }

  render() {
    return (
      <div
        className="ModalBackground"
        style={{"width": window.innerWidth, "height": window.innerHeight}}
      >
        <div className="ProjectFilterBoundingBox">
          <div className="ProjectFilters">
            {this.props.buttons.map(this.ReturnButton)}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
