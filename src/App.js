import React from 'react';
import './App.css';
import Get_Location from './components/Get_Location'
import Create_Location from './components/Create_Location'
import Update_Location from './components/Update_Location'
import Delete_Location from './components/Delete_Location'
import Get_Reservation from './components/Get_Reservation'
import Get_Calender_Entries from './components/Get_Calender_Entries'
import Create_Reservation from './components/Create_Reservation'
import Update_Reservation from './components/Update_Reservation'
import Delete_Reservation from './components/Delete_Reservation'
import Review_Reservation from './components/Review_Reservation'
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
          <Route exact path="/Locations" component={Get_Location}/>
          <Route exact path="/CLocation" component={Create_Location}/>
          <Route exact path="/ULocation" component={Update_Location}/>
          <Route exact path="/DLocation" component={Delete_Location}/>
          <Route exact path="/Reservations" component={Get_Reservation}/>
          <Route exact path="/Calenders" component={Get_Calender_Entries}/>
          <Route exact path="/CReservation" component={Create_Reservation}/>
          <Route exact path="/UReservation" component={Update_Reservation}/>
          <Route exact path="/DReservation" component={Delete_Reservation}/>
          <Route exact path="/RReview" component={Review_Reservation}/>
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
