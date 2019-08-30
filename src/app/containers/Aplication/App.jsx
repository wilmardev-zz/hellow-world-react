import React, { Component } from 'react';
import logo from '../../../assets/logo.svg';
import Button from '../../components/Button/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hellow World From React App!
          </p>
          <Button></Button>
        </header>      
      </div>    
    );
  }
}

export default App;
