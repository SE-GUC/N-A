import React from 'react';

export default class Delete_Location extends React.Component {
  state = {
    id: 0
  }

  handleChangeid = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    //deleting
    fetch(`http://localhost:5000/api/locations/`+this.state.id, {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
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
            <input type="text" id="id" onChange={this.handleChangeid} />
          </label><p></p>
          <button type="submit">Delete</button>
          </center></form>
      </div>
    )
  }
}
