import React from 'react';
import './App.css';
import All_Locations from './components/All_Locations'
import All_Admins from './components/All_Admins'
import All_Candidates from './components/All_Candidates'
import All_ConsultancyAgencies from './components/All_ConsultancyAgencies'
import All_Projects from './components/All_Projects'
import Project_Requests from './components/Project_Requests'
import UserForm from './components/UserForm'
import getCandidate from "./components/getCandidate";
import EditCandidate from "./components/updateCandidate";
import deleteCandidate from "./components/deleteCandidate";
import { Route, BrowserRouter as Router  } from 'react-router-dom'
import 'tachyons'

class App extends React.Component {
  render() {
    return (

      <Router>
          <div>
          <Route exact path="/Locations" component={All_Locations}/>
          <Route exact path="/Admins" component={All_Admins}/>
          <Route exact path="/Candidates" component={All_Candidates}/>
          <Route exact path="/ConsultancyAgencies" component={All_ConsultancyAgencies}/>
          <Route exact path="/Projects" component={All_Projects}/>
          <Route exact path="/Project_Requests" component={Project_Requests}/>
          <Route exact path="/signup" component={UserForm}/>
          <Route path="/Candidates/get" component={getCandidate} />
          <Route path="/Candidates/edit/:id" component={EditCandidate} />
          <Route path="/Candidates/delete/:id" component={deleteCandidate} />
          </div>
      </Router>
    )}
    
   
        
}

export default App;
