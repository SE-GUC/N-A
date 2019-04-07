import React from 'react';
import Candidate from './pages/Candidate.js'
import axios from 'axios';

class All_Candidates extends React.Component {
  state={
    candidates:[]
  }
  componentDidMount() {
    axios.get(`https://lirtenhub-na.herokuapp.com/api/Candidates`)
      .then(res => {
          console.log(res.data.data)
        const M = res.data.data;
        this.setState({candidates:M });
      })  
     
  }
  render() {
    return this.state.candidates.map((M)=>(
      <Candidate M={M}/>    
    ));
  }
}

export default All_Candidates;
