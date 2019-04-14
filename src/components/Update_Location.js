import React from 'react';
//import axios from 'axios';
const JSON = require('circular-json');

export default class Update_Location extends React.Component {
  state = {
    id: 0,
    name: '',
    photo_link: '',
    fee: 0,
    capacity: 0
  }

  handleChangeid = event => {
    this.setState({ id: event.target.value });
  }
  handleChangename = event => {
    this.setState({ name: event.target.value });
  }
  handleChangephotolink = event => {
    this.setState({ photo_link: event.target.value });
  }
  handleChangefee = event => {
    this.setState({ fee: event.target.value });
  }
  handleChangecapacity = event => {
    this.setState({ capacity: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const location = {
      name: this.state.name,
      photo_link: this.state.photo_link,
      fee: this.state.fee,
      capacity: this.state.capacity
    };

    //updating
    fetch(`http://localhost:5000/api/locations/`+this.state.id, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(location)
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
            Location’s Current Name (Required):
            <input type="text" id="id" onChange={this.handleChangeid} />
          </label><p></p>
          <label>
            Location’s New Name (Not Required):
            <input type="text" name="name" onChange={this.handleChangename} />
          </label><p></p>
          <label>
            Location’s New photo_link (Not Required):
            <input type="text" photo_link="photo_link" onChange={this.handleChangephotolink} />
          </label><p></p>
          <label>
            Location’s New fee (Not Required):
            <input type="number" fee="fee" onChange={this.handleChangefee} />
          </label><p></p>
          <label>
            Location’s New Capacity (Not Required):
            <input type="number" capacity="capacity" onChange={this.handleChangecapacity} />
          </label><p></p>
          <button type="submit">Update</button>
          </center></form>
      </div>
    )
  }
}
