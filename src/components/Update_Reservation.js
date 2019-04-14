import React from 'react';
//var cors = require('cors')
const JSON = require('circular-json');


export default class Update_Reservation extends React.Component {

  state = {
    loc_id: '',

    to: '',
    from: '',
    day: '',
    ownerID: '',

    to_old: '',
    from_old: '',
    day_old: '',
    ownerID_old: ''
  }
  //loc id changing
  handleChangelocid = event => {
    this.setState({ loc_id: event.target.value });
  }
  //new values changing
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
  //old values changing
  handleChangetoold = event => {
    this.setState({ to_old: event.target.value });
  }
  handleChangefromold = event => {
    this.setState({ from_old: event.target.value });
  }
  handleChangedayold = event => {
    this.setState({ day_old: event.target.value });
  }
  handleChangeownerIDold = event => {
    this.setState({ ownerID_old: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    /*
    const newvalue = {
      to: this.state.to,
      from: this.state.from,
      day: this.state.day,
      ownerID: this.state.ownerID
    };
    const oldvalue = {
      to_old: this.state.to_old,
      from_old: this.state.from_old,
      day_old: this.state.day_old,
      ownerID_old: this.state.ownerID_old
    };*/
    //var new_str = ("{oldvalue:"+JSON.stringify(oldvalue)+"}").replace(/_old/g, '');
    //var new_str = {oldvalue:"to":this.state.to_old,"from":this.state.from_old,"day":this.state.day_old,"ownerID":this.state.ownerID_old}
    
    var body_real = JSON.stringify({"oldvalue":{"to":this.state.to_old,"from":this.state.from_old,"day":this.state.day_old,"ownerID":this.state.ownerID_old}
                    ,"newvalue":{"to":this.state.to,"from":this.state.from,"day":this.state.day,"ownerID":this.state.ownerID}})
    //console.log(body_real)
          
    //updating
    fetch("http://localhost:5000/api/locations/reservations/"+this.state.loc_id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' , "Accept": "application/json" },
    body: body_real
  })
  .then(function (response) {
    return response.json();
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
            Location's Name (Required):
            <input type="text" loc_id="loc_id" onChange={this.handleChangelocid} />
          </label><p></p><p>Original Reservation Attributes</p>
          <label>
            Original Reservation To (Required):
            <input type="text" to_old="to_old" onChange={this.handleChangetoold} />
          </label><p></p>
          <label>
            Original Reservation From (Required):
            <input type="text" from_old="from_old" onChange={this.handleChangefromold} />
          </label><p></p>
          <label>
            Original Reservation Day (Required):
            <input type="text" day_old="day_old" onChange={this.handleChangedayold} />
          </label><p></p>
          <label>
            Original Reservation Owner ID (Required):
            <input type="text" ownerID_old="ownerID_old" onChange={this.handleChangeownerIDold} />
          </label><p></p><p>New Reservation Attributes</p>

          <label>
            New Reservation To (Not Required):
            <input type="text" to="to" onChange={this.handleChangeto} />
          </label><p></p>
          <label>
          New Reservation From (Not Required):
            <input type="text" from="from" onChange={this.handleChangefrom} />
          </label><p></p>
          <label>
          New Reservation Day (Not Required):
            <input type="text" day="day" onChange={this.handleChangeday} />
          </label><p></p>
          <label>
          New Reservation Owner ID (Not Required):
            <input type="text" ownerID="ownerID" onChange={this.handleChangeownerID} />
          </label><p></p>
          
          <button type="submit">Update</button>
          </center></form>
      </div>
    )
  }
}