import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Content from '../../components/Content/Content';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Content></Content>
      </div>    
    );
  }
}

export default App;
