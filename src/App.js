import React from 'react';
import './App.css';
import All_Projects from './components/All_Projects'
import Project_Requests from './components/Project_Requests'
import { Route, BrowserRouter as Router  } from 'react-router-dom'
// import Header from './components/layout/Header'
import 'tachyons'


class App extends React.Component {
  render() {
    return (

      <Router>
          <div>
          <Route exact path="/Projects" component={All_Projects}/>
          <Route exact path="/Project_Requests" component={Project_Requests}/>
          </div>
      </Router>
    )}
}

export default App;
