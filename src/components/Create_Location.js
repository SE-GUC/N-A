import React from 'react';
const JSON = require('circular-json');

export default class Create_Location extends React.Component {
  state = {
    name: '',
    country: '',
    city: '',
    street: '',
    capacity: 0
  }

  handleChangename = event => {
    this.setState({ name: event.target.value });
  }
  handleChangecountry = event => {
    this.setState({ country: event.target.value });
  }
  handleChangecity = event => {
    this.setState({ city: event.target.value });
  }
  handleChangestreet = event => {
    this.setState({ street: event.target.value });
  }
  handleChangecapacity = event => {
    this.setState({ capacity: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const location = {
      name: this.state.name,
      country: this.state.country,
      city: this.state.city,
      street: this.state.street,
      capacity: this.state.capacity
    };
    //inserting
    fetch(`http://localhost:5000/api/locations/`, {
    method: 'post',
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
            Location’s Name:
            <input type="text" name="name" onChange={this.handleChangename} />
          </label><p></p>
          <label>
            Location’s Country:
            <input type="text" country="country" onChange={this.handleChangecountry} />
          </label><p></p>
          <label>
            Location’s city:
            <input type="text" city="city" onChange={this.handleChangecity} />
          </label><p></p>
          <label>
            Location’s street:
            <input type="text" street="street" onChange={this.handleChangestreet} />
          </label><p></p>
          <label>
            Location’s Capacity:
            <input type="number" capacity="capacity" onChange={this.handleChangecapacity} />
          </label><p></p>
          <button type="submit">Add</button>
          </center></form>
      </div>
    )
  }
}
