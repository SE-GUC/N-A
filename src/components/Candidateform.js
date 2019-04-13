import React from 'react';
import Candidate from './pages/Candidateform.js'
import axios from 'axios';

class Candidateform extends React.Component {
  state={
    candidates:[]
  }
  componentDidMount() {
    axios.get(`https://lirtenhub-na.herokuapp.com/api/Candidates`)
      .then(res => {
          console.log(res.data.data.pop())
        const M = res.data.data.pop();
        this.setState({candidates:[M] });
      })  
     
  }
  render() {
    return this.state.candidates.map((M)=>(
      <Candidate M={M}/>    
   
    ));
  }
}

export default Candidateform;
