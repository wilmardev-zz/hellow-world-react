import React, { Component } from 'react';
import logo from '../../../assets/logo.svg';
import './Container.css';

class Container extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hellow World
        </p>
        </header>
      </div>
    );
  }
}

export default Container;
