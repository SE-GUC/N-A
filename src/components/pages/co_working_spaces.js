import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './co_working_spaces.css';

 class co_working_spaces extends Component {
  


  render() {
    return (//M is Actullay the Co_working_space Info itself
      <div >
        <h3>{this.props.M.FirstName}
        <div></div>
        {this.props.M.FirstName+", "+this.props.M.LastName}</h3>
      </div>
    )
  }
}

co_working_spaces.propTypes ={
  M:PropTypes.object.isRequired
}

export default co_working_spaces