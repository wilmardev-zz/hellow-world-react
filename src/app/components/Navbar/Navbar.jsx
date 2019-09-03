import React, { Component } from 'react'
import logo from '../../../assets/logo.svg';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="http://localhost:3000">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                        React!
                </a>
            </nav>
        );
    }
}
 
export default Navbar;