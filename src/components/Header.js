import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from '../images/logo.svg';

import CreateTodo from './CreateTodo';
import Backdrop from './Backdrop';
import TodosList from './TodosList';
import EditTodo from './EditTodo';

class Header extends React.Component {
  render() {
    return (
      <Router>
        <nav id="navigation" className="navbar navbar-toggleable-xl navbar-expand navbar-dark bg-dark">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to="/todos" className="nav-link">All Todos</Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">Create A Todo</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={Backdrop} />
        <Route path="/todos" component={TodosList} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/edit/:id" component={EditTodo} />
      </Router>
    )
  }
}

export default Header;