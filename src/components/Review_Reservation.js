import React from 'react';
const JSON = require('circular-json');

export default class Review_Reservation extends React.Component {
  state = {
    loc_id: '',

    to: '',
    from: '',
    day: '',
    ownerID: '',

    status:false
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
  handleChangestatus = event => {
    this.setState({ status: !(event.target.checked) });console.log(this.state.status)
  }


  handleSubmit = event => {
    event.preventDefault();

    var number = 0;
    if(this.state.status===true){
        number = -1;
    }else{
      number = 1;
    }

    var body_real = JSON.stringify({"entry":{"to":this.state.to,"from":this.state.from,"day":this.state.day,"ownerID":this.state.ownerID},"status":number})

    //updating
    fetch(`http://localhost:5000/api/locations/review/`+this.state.loc_id, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' , "Accept": "application/json" },
    body: body_real
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
            Original Reservation To (Required):
            <input type="text" to="to" onChange={this.handleChangeto} />
          </label><p></p>
          <label>
            Original Reservation From (Required):
            <input type="text" from="from" onChange={this.handleChangefrom} />
          </label><p></p>
          <label>
            Original Reservation Day (Required):
            <input type="text" day="day" onChange={this.handleChangeday} />
          </label><p></p>
          <label>
            Original Reservation Owner Name (Required):
            <input type="text" ownerID="ownerID" onChange={this.handleChangeownerID} />
          </label><p></p>
          <label>
            Reservation Accepted? (Required): 
            <input type="checkbox" status="status" onChange={this.handleChangestatus} />
          </label><p></p>
          <button type="submit">Submit Review</button>
          </center></form>
      </div>
    )
  }
}
