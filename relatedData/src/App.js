import React, { Component } from 'react';
import Tree from './components/Tree';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="App-intro">

          <Tree/>
          
        </div>
      </div>
    );
  }
}

export default App;
