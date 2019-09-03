import React, { Component } from 'react'
import Button from '../Button/Button';
import Mentors from '../Mentors/Mentors';
import logo from '../../../assets/logo.svg';

class Content extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hellow World From React App!
                </p>
                <Mentors></Mentors>
                <Button></Button>
            </header>
        );
    }
}

export default Content;
