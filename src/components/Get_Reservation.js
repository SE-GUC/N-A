import React from 'react';
//import Reservation from './pages/Reservation.js'
//import axios from 'axios';

class Get_Reservation extends React.Component {
  state={
    name:'',
    reservations:[]
  }

  handleChangename = event => {
    this.setState({ name: event.target.value })
    //console.log(this.state.name);;
  }

  handleSubmit = event => {
  event.preventDefault();
  let currentComponent = this;
  fetch(`http://localhost:5000/api/locations/reservations/`+this.state.name, {
  method: 'get',
  headers: { 'Content-Type': 'application/json' },
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    currentComponent.setState({ reservations: data.data[0] })
  })

  }

  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}><center>
        <label>
          Location’s Name:
          <input type="text" name="name" onChange={this.handleChangename} />
        </label><p></p>
        <button type="submit">Get Reservations</button>
        </center></form>
        <div>{this.state.reservations.map(res =>
      /*  <script>
          var curr =''
          if(res.status=="1"){
            curr="Accepted"
          }else{
            if(res.status=="-1"){
              curr="Rejected"
            }else{
              curr="Not Yet Reviewed"
            }
          }
        </script>*/
        <div >
        <h3>{"Reservation Requested By "+res.ownerID/*+"  :::  "+curr*/}
        <div></div>
        {"On "+res.day+" From "+res.from+" To "+res.to}</h3>
      </div>

        )}</div>
    </div>
    )
  }
}

export default Get_Reservation;
