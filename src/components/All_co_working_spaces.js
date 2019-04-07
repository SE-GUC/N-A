import React from 'react';
import Co_working_spaces from './pages/co_working_spaces.js'
import axios from 'axios';

class All_co_working_spaces extends React.Component {
  state={
    co_working_spaces:[]
  }
  componentDidMount() {
    axios.get(`https://lirtenhub-na.herokuapp.com/api/Co_working_spaces`)
      .then(res => {
        //console.log(res.data.data)
        const M = res.data.data;
        this.setState({co_working_spaces:M });
      })  
     
  }
  render() {
    return this.state.co_working_spaces.map((M)=>(
      <Co_working_spaces M={M}/>    
    ));
  }
}

export default All_co_working_spaces;