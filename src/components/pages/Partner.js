import React, { Component } from 'react';
import  PropTypes from 'prop-types';
import './Partners.css';
class Partner extends Component {
    
      render() {
        return (
         <div>
           <h3>
             {this.props.partner.FirstName}+ " , " +{this.props.partner.LastName}+","+{this.props.partner.Basic_Info}
             {this.props.partner.Past_Projects}
             
           </h3>
         </div>
        )
      }
    }
      Partner.propTypes={
      part:PropTypes.object.isRequired
      }


export default Partner;