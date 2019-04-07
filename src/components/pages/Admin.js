import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Admins.css';

 class Admin extends Component {
  


  render() {
    return (//M is Actullay the Admin Info itself
      <div >
        <h3>{this.props.M.FirstName}
        <div></div>
        {this.props.M.FirstName+", "+this.props.M.LastName}</h3>
      </div>
    )
  }
}

Admin.propTypes ={
  M:PropTypes.object.isRequired
}

export default Admin
