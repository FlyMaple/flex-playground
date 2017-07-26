import React, { Component } from 'react';

class DiceLayout extends Component {
  render() {
    return (
      <div className="dice-layout">
        <div className="first-face">
          <span className="pip"></span>
        </div>
        <div className="second-face">
          <span className="pip"></span>
          <span className="pip"></span>
        </div>
        <div className="third-face">
          <span className="pip"></span>
          <span className="pip"></span>
          <span className="pip"></span>
        </div>
        <div className="fourth-face">
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        </div>
        <div className="fifth-face">
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
          <div className="column">
            <span className="pip"></span>
          </div>
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        </div>
        <div className="sixth-face">
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
          <div className="column">
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default DiceLayout;