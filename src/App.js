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
import getConsultancyAgency from "./components/getConsultancyAgency";
import EditConsultancyAgency from "./components/updateConsultancyAgency";
import deleteConsultancyAgency from "./components/deleteConsultancyAgency";
import ConsultancyAgencyBoardMembers from "./components/ConsultancyAgencyBoardMembers";
import ConsultancyAgencyPast_Events from "./components/ConsultancyAgencyPast_Events"
import ConsultancyAgencyPast_EventsAdd from "./components/ConsultancyAgencyPast_EventsAdd"
import ConsultancyAgencyBoardMembersAdd from "./components/ConsultancyAgencyBoardMembersAdd"
import ConsultancyAgencyPast_Eventsupdate from "./components/ConsultancyAgencyPast_EventsUpdate"
import ConsultancyAgencyBoardMembersupdate from "./components/ConsultancyAgencyBoardMembersUpdate"
import ConsultancyAgencyPast_Eventsdelete from "./components/ConsultancyAgencyPast_EventsDelete"
import ConsultancyAgencyBoardMembersDelete from "./components/ConsultancyAgencyBoardMembersDelete"
import Delete_BusPlanOffered from './components/coworkingspacebusplansofferedDelete'
import BusPlanOffered from './components/CoworkingspacesBussinessplansOffered'
import Delete_Facilites from './components/coworkingspacefacilitesDelete'
import Update_Facilites from './components/Co_working_spacesFacilitiesUpdate'
import Add_Facilites from './components/Co_working_spacefacilityAdd'
import Add_Business_plans_offered from './components/Co_working_spaceBusiness_plans_offeredAdd'
import Update_Business_plans_offered from './components/Co_working_spacesBusiness_plans_offeredUpdate'
import Update_Coworkingspace from './components/updateCo_working_spaces'
import All_coworkingplaces from './components/All_co_working_spaces'
import Facilites from './components/CoworkingspaceFacilities'
import Delete_Coworkingspace from './components/deleteCoworkingspace'
import coworkingplacesget from './components/getcoworkingspace'
import updateAdmin from "./components/updateAdmin";
import deleteAdmin from "./components/deleteAdmin";
import getAdmin from "./components/Adminsget";
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
          <Route exact path="/ConsultancyAgencies" component={All_ConsultancyAgencies}/>
          <Route path="/ConsultancyAgencies/get" component={getConsultancyAgency} />
          <Route path="/ConsultancyAgencies/edit/:id" component={EditConsultancyAgency} />
          <Route path="/ConsultancyAgencies/delete/:id" component={deleteConsultancyAgency} />
          <Route path="/ConsultancyAgencies/Past_Events/:id" component={ConsultancyAgencyPast_Events} />
          <Route path="/ConsultancyAgencies/BoardMembers/:id" component={ConsultancyAgencyBoardMembers} />
          <Route path="/ConsultancyAgencies/Past_Eventsadd/:id" component={ConsultancyAgencyPast_EventsAdd} />
          <Route path="/ConsultancyAgencies/Past_Eventsdelete/:id" component={ConsultancyAgencyPast_Eventsdelete} />
          <Route path="/ConsultancyAgencies/Past_Eventsupdate/:id" component={ConsultancyAgencyPast_Eventsupdate} />
          <Route path="/ConsultancyAgencies/BoardMembersupdate/:id" component={ConsultancyAgencyBoardMembersupdate} />
          <Route path="/ConsultancyAgencies/BoardMembersadd/:id" component={ConsultancyAgencyBoardMembersAdd} />
          <Route path="/ConsultancyAgencies/BoardMembersdelete/:id" component={ConsultancyAgencyBoardMembersDelete} />
          <Route path="/co_working_space/Business_Plans_Offereddelete/:id" component={Delete_BusPlanOffered} />
          <Route path="/co_working_space/getBusinessPlansOffered/:id" component={BusPlanOffered} />
          <Route path="/co_working_space/Facilitesdelete/:id" component={Delete_Facilites} />
          <Route path="/co_working_space/getFacilites/:id" component={Facilites} />
          <Route path="/co_working_space/delete/:id" component={Delete_Coworkingspace} />
          <Route path="/co_working_space/Business_Plans_Offeredupdate/:id" component={Update_Business_plans_offered} />
          <Route path="/co_working_space/Facilitesupdate/:id" component={Update_Facilites} />
          <Route path="/co_working_spaces/Facilitesadd/:id" component={Add_Facilites} />
          <Route path="/co_working_space/Business_plans_offeredAdd/:id" component={Add_Business_plans_offered} />
          <Route path="/co_working_space/edit/:id" component={Update_Coworkingspace} />
          <Route path="/co_working_space/get" component={coworkingplacesget} />
          <Route exact path="/Admins/edit/:id" component={updateAdmin}/>
          <Route exact path="/Admins/delete/:id" component={deleteAdmin}/>
          <Route exact path="/Admins/get" component={getAdmin}/>
          </div> 
      </Router>
    )}
   
    
   
        
}

export default App;