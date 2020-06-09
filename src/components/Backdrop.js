import React from 'react';
import logo from './../images/logo.svg';

class Backdrop extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo-big" alt="logo" />
          <p>
            Proudly served by MERN Architecture
          </p>
          <p>
            MariaDB, ExpressJS, ReactJS, and NodeJS
          </p>
          <a
            className="App-link"
            href="https://nicholasdw.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to my website!
          </a>
        </header>
      </div>
    )
  }
}

export default Backdrop;