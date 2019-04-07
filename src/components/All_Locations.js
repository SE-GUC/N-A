import React from 'react';
import Location from './pages/Location.js'
import axios from 'axios';

class All_Locations extends React.Component {
  state={
    locations:[]
  }
  componentDidMount() {
    axios.get(`https://lirtenhub-na.herokuapp.com/api/locations`)
      .then(res => {
        const L = res.data.data;
        this.setState({locations:L });
      })  
     
  }
  render() {
    return this.state.locations.map((L)=>(
      <Location L={L}/>    
    ));
  }
}

export default All_Locations;
