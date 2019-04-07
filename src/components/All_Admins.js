import React from 'react';
import Admin from './pages/Admin.js'
import axios from 'axios';

class All_Admins extends React.Component {
  state={
    Admins:[]
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/api/admins`) //https://lirtenhub-na.herokuapp.com/api/admins will not work for now; SEE README.
      .then(res => {
          console.log(res.data.data)
        const M = res.data.data;
        this.setState({Admins:M });
      })  
     
  }
  render() {
    return this.state.Admins.map((M)=>(
      <Admin M={M}/>    
    ));
  }
}

export default All_Admins;
