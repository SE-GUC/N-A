import React from 'react';
//import Reservation from './pages/Reservation.js'
//import axios from 'axios';

class Get_Calender_Entries extends React.Component {
  state={
    name:'',
    calender_entries:[]
  }

  handleChangename = event => {
    this.setState({ name: event.target.value })
    //console.log(this.state.name);;
  }

  handleSubmit = event => {
  event.preventDefault();
  let currentComponent = this;
  fetch(`http://localhost:5000/api/locations/calenders/`+this.state.name, {
  method: 'get',
  headers: { 'Content-Type': 'application/json' },
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    currentComponent.setState({ calender_entries: data.data[0] })
  })

  }

  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}><center>
        <label>
          Location's Name:
          <input type="text" name="name" onChange={this.handleChangename} />
        </label><p></p>
        <button type="submit">Get Calender Entries</button>
        </center></form>
        <div>{this.state.calender_entries.map(res =>
        
        <div >
        <h3>{"Reserved By "+res.ownerID}
        <div></div>
        {"On "+res.day+" From "+res.from+" To "+res.to}</h3>
      </div>

        )}</div>
    </div>
    )
  }
}

export default Get_Calender_Entries;
