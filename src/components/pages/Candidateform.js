import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Candidateform extends Component {
  render() {
    return (//M is Actullay the Candidate Info itself
      <div>
       FirstName: {this.props.M.FirstName}<br></br>
       LastName :{this.props.M.LastName}<br></br>
       Birthdate:{this.props.M.Birthdate}<br></br>
       email:{this.props.M.email}<br></br>
       password:{this.props.M.password}<br></br>
       Certificates:{this.props.M.Certificates}<br></br>
       Avg_Rating:{this.props.M.Certificates}<br></br>
       Intrests:{this.props.M.Intrests}<br></br>
       Past_Projects:{this.props.M.Past_Projects}<br></br>
       Skills:{this.props.M.Skills}<br></br>
       Ratings:{this.props.M.Ratings}<br></br>
       <a href="/deleteCandidateform">delete Account! </a><br></br>
       <a href="/updateCandidateform">update  Account! </a><br></br>
       <a href="/skills">skills </a><br></br>
       <a href="/Intrests">intrests </a><br></br>
       <a href="/Past_Projects">past_projects </a><br></br>
       <a href="/Certificates">certificates </a><br></br>
       </div>
      
    
    )
  }
}

Candidateform.propTypes ={
  M:PropTypes.object.isRequired
}

export default Candidateform