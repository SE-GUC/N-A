import React from 'react';
import Project from './Project.js'
import axios from 'axios';
class All_Projects extends React.Component {
  state={
    Projects:[]
  }
  componentDidMount() {
    axios.get(`https://lirtenhub-na.herokuapp.com/api/Projects`)
      .then(res => {
        const P = res.data.data;
        this.setState({Projects:P });
      })  
     
  }
  render() {
    return this.state.Projects.map((P)=>(
      <Project P={P}/>    
    ));
  }
}

export default All_Projects;
