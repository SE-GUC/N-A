import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Projects.css';

 class Project extends Component {
  


  render() {
    return (//P is Actullay the Project Info itself
      <div >
        
        <h3>{this.props.P.name}
        <div></div>
        {this.props.P.descreption}</h3>
      </div>
    )
  }
}

Project.propTypes ={
  P:PropTypes.object.isRequired
}

export default Project
