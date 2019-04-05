import React from 'react';
import './App.css';
import All_Projects from './components/All_Projects'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello User</h1>
        <All_Projects/>
      </div>
     
    );
  }
}

export default App;
