import React, { Component } from 'react';
import ProjectFilter from './ProjectFilter.jsx';
import './Modal.css';

class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('resize', this.ResizeHandlerFunction);
  }

  ResizeHandlerFunction = () => {
    this.FireAfterResize(this.props.modalToggleFunc, 200); 
  }

  FireAfterResize = (func, timeout) => {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => { func(); }, timeout);
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

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.ResizeHandlerFunction);
  }

  render() {
    let shouldDisplay = this.props.active ? "" : "none";
    return (
      <div
        className="ModalBackground"
        style={{
          "width": window.innerWidth,
          "height": window.innerHeight,
          "display": shouldDisplay,
        }}
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
