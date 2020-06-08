import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from '../images/logo.svg';

import CreateTodo from './CreateTodo';
import Backdrop from './Backdrop';

class Header extends React.Component {
  render() {
    return (
      <Router>
        <nav id="navigation" className="navbar navbar-expand-lg navbar-dark bg-dark">
          <img src={logo} className="App-logo" alt="logo" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Nicholas Dwiarto <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">Create A Todo</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={Backdrop} />
        <Route path="/create" component={CreateTodo} />
      </Router>
    )
  }
}

export default Header;