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
<<<<<<< HEAD
import Create_Co_working_space from './components/Create_Co_working_space';
=======
>>>>>>> 76f065f84317d7843a37457dfaa5062884aa6f16



class App extends React.Component {

  render() {

    return (
<<<<<<< HEAD
=======



>>>>>>> 76f065f84317d7843a37457dfaa5062884aa6f16
      <Router>

          <div>

          <Route exact path="/Locations" component={All_Locations}/>




          <Route exact path="/Admins" component={All_Admins}/>
          <Route exact path="/CSpaces" component={Create_Co_working_space}/>
          <Route exact path="/Candidates" component={All_Candidates}/>

          <Route exact path="/Projects" component={All_Projects}/>

          <Route exact path="/Project_Requests" component={Project_Requests}/>
<<<<<<< HEAD
          <Route exact path="/All_Partners" component={All_Partners}/>
=======
>>>>>>> 76f065f84317d7843a37457dfaa5062884aa6f16
          <Route exact path="/co_working_spaces" component={All_co_working_spaces}/>


       

          </div>

      </Router>

    )}

}



export default App;
