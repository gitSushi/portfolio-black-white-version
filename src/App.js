import React from 'react';
import './App.css';

import Skill from './skills/Skill'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Skill/>
      </div>
    );
  }
}

export default App;
