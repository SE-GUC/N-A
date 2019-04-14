import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Locations.css';

 class Location extends Component {
  


  render() {
    return (//L is Actullay the Location Info itself
      <div >
        <h3>{"Location "+this.props.L.name/*+" ::: "+this.props.L._id*/}
        <div></div>
        {"Located in "+this.props.L.country+", "+this.props.L.city+", "+this.props.L.street}</h3>
      </div>
    )
  }
}

Location.propTypes ={
  L:PropTypes.object.isRequired
}

export default Location
