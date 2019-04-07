import React from 'react';
import ConsultancyAgency from './pages/ConsultancyAgency.js'
import axios from 'axios';

class All_ConsultancyAgencies extends React.Component {
  state={
    consultancyAgencies:[]
  }
  componentDidMount() {
    axios.get(`https://lirtenhub-na.herokuapp.com/api/ConsultancyAgencies`)
      .then(res => {
          console.log(res.data.data)
        const Y = res.data.data;
        this.setState({consultancyAgencies:Y });
      })  
     
  }
  render() {
    return this.state.consultancyAgencies.map((Y)=>(
      <ConsultancyAgency Y={Y}/>    
    ));
  }
}

export default All_ConsultancyAgencies;
