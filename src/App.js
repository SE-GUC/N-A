import React from 'react';
import './App.css';
import All_Projects from './components/All_Projects'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={props =>(
            <div>
            <h1>hello</h1>
            <Link to="/Projects">All Projects</Link>
            </div>
            
          )}/>       
          <Route exact path="/Projects" component={All_Projects} />
        </div>
      </Router>
     
    );
  }
}

export default App;
