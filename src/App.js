import React from 'react';

import './App.css';

import All_Locations from './components/All_Locations'

import All_Admins from './components/All_Admins'
import All_Candidates from './components/All_Candidates'

import All_Projects from './components/All_Projects'

import Project_Requests from './components/Project_Requests'

import All_co_working_spaces from './components/All_co_working_spaces'



import { Route, BrowserRouter as Router  } from 'react-router-dom'

import 'tachyons'
import All_Partners from './components/All_Partners';



class App extends React.Component {

  render() {

    return (



      <Router>

          <div>

          <Route exact path="/Locations" component={All_Locations}/>




          <Route exact path="/Admins" component={All_Admins}/>
          <Route exact path="/Candidates" component={All_Candidates}/>

          <Route exact path="/Projects" component={All_Projects}/>

          <Route exact path="/Project_Requests" component={Project_Requests}/>

          <Route exact path="/co_working_spaces" component={All_co_working_spaces}/>


          <Route exact path="/All_Partners" component={All_Partners}/>


          </div>

      </Router>

    )}

}



export default App;
