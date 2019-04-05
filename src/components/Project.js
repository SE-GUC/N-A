import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Project extends Component {
  
  render() {
    return (//P is Actullay the Project Info itself
      <div>
        
        <h3>{this.props.P.name}</h3>
        <p>{this.props.P.descreption}</p>
      </div>
    )
  }
}

Project.propTypes ={
  P:PropTypes.object.isRequired
}

export default Project
