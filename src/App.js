// Node Imports
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

// CSS Imports
import './App.css';

// Main Component Imports
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="Application">
        <Header/>
      </div>
    )
  }
}

export default App;
