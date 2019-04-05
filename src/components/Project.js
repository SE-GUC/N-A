import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class Project extends Component {
  
  getStyle=()=>{
    return {
      background:'#E0FFFF',
      
    }
  }

  render() {
    return (//P is Actullay the Project Info itself
      <div style={this.getStyle()}>
        
        <h3>{this.props.P.name}</h3>
        <h3>{this.props.P.descreption}</h3>
      </div>
    )
  }
}

Project.propTypes ={
  P:PropTypes.object.isRequired
}

export default Project
