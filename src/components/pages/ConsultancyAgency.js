import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ConsultancyAgencies.css';

 class ConsultancyAgency extends Component {
  


  render() {
    return (//Y is Actullay the consultancyAgency Info itself
      <div >
        <h3>{this.props.Y.FirstName}
        <div></div>
        {this.props.Y.FirstName+", "+this.props.Y.LastName}</h3>
      </div>
    )
  }
}

ConsultancyAgency.propTypes ={
  Y:PropTypes.object.isRequired
}

export default ConsultancyAgency
