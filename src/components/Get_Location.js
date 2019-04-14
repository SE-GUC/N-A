import React from 'react';
import Location from './pages/Location.js'
import axios from 'axios';

class Get_Location extends React.Component {
  state={
    locations:[]
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/api/locations`)
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

export default Get_Location;
