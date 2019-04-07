import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Candidates.css';

 class Candidate extends Component {
  


  render() {
    return (//M is Actullay the Candidate Info itself
      <div >
        <h3>{this.props.M.FirstName}
        <div></div>
        {this.props.M.FirstName+", "+this.props.M.LastName}</h3>
      </div>
    )
  }
}

Candidate.propTypes ={
  M:PropTypes.object.isRequired
}

export default Candidate
