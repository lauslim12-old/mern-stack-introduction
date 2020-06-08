import React from 'react';
import logo from '../images/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <nav id="navigation" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">Nicholas Dwiarto <span className="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;