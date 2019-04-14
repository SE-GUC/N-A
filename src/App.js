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
import CandidateIntrests from "./components/CandidateIntrests";
import CandidatePastProjects from "./components/CandidatePast_Projects";
import CandidateCertificate from "./components/CandidateCertificate"
import CandidateSkills from "./components/CandidateSkills"
import CandidateSkillsAdd from "./components/CandidateSkillsAdd"
import CandidateCertificateAdd from "./components/CandidateCertificateAdd"
import CandidateIntrestsAdd from "./components/CandidateIntrestAdd"
import CandidatePastProjectsAdd from "./components/CandidatePastProjectsAdd"
import CandidateCertificateupdate from "./components/CandidateCertificateUpdate"
import CandidateIntrestsupdate from "./components/CandidateIntrestUpdate"
import CandidatePastProjectsupdate from "./components/CandidatePastProjectsUpdate"
import CandidateCertificatedelete from "./components/CandidateCertificateDelete"
import CandidateIntrestsDelete from "./components/CandidateIntrestDelete"
import CandidatePastProjectsDelete from "./components/CandidatePastProjectsDelete"
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
          <Route path="/Candidates/Certificate/:id" component={CandidateCertificate} />
          <Route path="/Candidates/Intrests/:id" component={CandidateIntrests} />
          <Route path="/Candidates/Past_Projects/:id" component={CandidatePastProjects} />
          <Route path="/Candidates/Certificateadd/:id" component={CandidateCertificateAdd} />
          <Route path="/Candidates/Certificatedelete/:id" component={CandidateCertificatedelete} />
          <Route path="/Candidates/Certificateupdate/:id" component={CandidateCertificateupdate} />
          <Route path="/Candidates/Intrestsupdate/:id" component={CandidateIntrestsupdate} />
          <Route path="/Candidates/Intrestsadd/:id" component={CandidateIntrestsAdd} />
          <Route path="/Candidates/Intrestsdelete/:id" component={CandidateIntrestsDelete} />
          <Route path="/Candidates/Past_Projectsupdate/:id" component={CandidatePastProjectsupdate} />
          <Route path="/Candidates/Past_Projectsadd/:id" component={CandidatePastProjectsAdd} />
          <Route path="/Candidates/past_Projectsdelete/:id" component={CandidatePastProjectsDelete} />
          <Route path="/Candidates/Skills/:id" component={CandidateSkills} />
          <Route path="/Candidates/SkillsAdd/:id" component={CandidateSkillsAdd} />
          </div>
      </Router>
    )}
    
   
        
}

export default App;
