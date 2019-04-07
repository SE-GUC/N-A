import React from 'react';

import axios from 'axios';
import Partner from './pages/Partner.js';



class All_Partners extends React.Component {

  state={

    part:[]

  }

  componentDidMount() {

    axios.get(`https://lirtenhub-na.herokuapp.com/api/Partner`)

      .then(res => {

        const partner = res.data.data;

        this.setState({part:partner });

      })  

     

  }

  render() {

    return this.state.part.map((partner)=>(

      <Partner partner={partner}/>    

    ));

  }

}



export default All_Partners;