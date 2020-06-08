import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/Header';
import Backdrop from './components/Backdrop';

class App extends React.Component {
  render() {
    return (
      <div className="Application">
        <Header/>
        <Backdrop/>
      </div>
    )
  }
}

export default App;
