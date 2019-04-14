import React from 'react';
//import axios from 'axios';
const JSON = require('circular-json');

export default class Delete_Reservation extends React.Component {
  state = {
    loc_id: '',

    to: '',
    from: '',
    day: '',
    ownerID: ''
  }
  //loc id changing
  handleChangelocid = event => {
    this.setState({ loc_id: event.target.value });
  }

  handleChangeto = event => {
    this.setState({ to: event.target.value });
  }
  handleChangefrom = event => {
    this.setState({ from: event.target.value });
  }
  handleChangeday = event => {
    this.setState({ day: event.target.value });
  }
  handleChangeownerID = event => {
    this.setState({ ownerID: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const entry = {
      to: this.state.to,
      from: this.state.from,
      day: this.state.day,
      ownerID: this.state.ownerID
    };
    console.log({"entry":JSON.stringify(entry)})
    //updating
    fetch(`http://localhost:5000/api/locations/reservations/`+this.state.loc_id, {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({"entry":entry})
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log('post request response data', data)
  })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}><center>
        <label>
            Location’s Name (Required):
            <input type="text" loc_id="loc_id" onChange={this.handleChangelocid} />
          </label><p></p>
          <label>
            Reservation To (Required):
            <input type="text" to="to" onChange={this.handleChangeto} />
          </label><p></p>
          <label>
          Reservation From (Required):
            <input type="text" from="from" onChange={this.handleChangefrom} />
          </label><p></p>
          <label>
          Reservation Day (Required):
            <input type="text" day="day" onChange={this.handleChangeday} />
          </label><p></p>
          <label>
          Reservation Owner Name (Required):
            <input type="text" ownerID="ownerID" onChange={this.handleChangeownerID} />
          </label><p></p>
          
          <button type="submit">Delete</button>
          </center></form>
      </div>
    )
  }
}
