import React from 'react';
import axios from 'axios';

export default class Create_Co_working_space extends React.Component {
  state = {
    Basic_Info: '',
    Business_Plans_Offered: '',
    Rooms: 0,
    Facilites: [],
    
  }

  handleChangefname = event => {
    this.setState({ Basic_Info: event.target.value });
  }
  handleChangelname = event => {
    this.setState({ Business_Plans_Offered: event.target.value });
  }
  handleChangeRooms = event => {
    this.setState({ Rooms: event.target.value });
  }
  handleChangeFacilites = event => {
    this.setState({ Facilites: event.target.value });
  }
  

  handleSubmit = event => {
    event.preventDefault();
   

    const co_working_space = {
      Basic_Info: event.target.Basic_Info,
      Business_Plans_Offered: event.target.Business_Plans_Offered,
      Rooms: event.target.Rooms,
      Facilites: event.target.Facilites,
      
    };


    axios.post(`http://localhost:5000/api/co_working_spaces/`, { co_working_space }, {headers: {"Content-Type": "application/json"}})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            co_working_space Basic Info:
            <input type="text" Basic_Info="Basic_Info" onChange={this.handleChangefname} />
          </label>
          <label>
            co_working_space Business Plans Offered:
            <input type="text" Business_Plans_Offered="Business_Plans_Offered" onChange={this.handleChangelname} />
          </label>
          <label>
            co_working_space Rooms:
            <input type="text" Rooms="Rooms" onChange={this.handleChangeRooms} />
          </label>
          <label>
            co_working_space Facilites:
            <input type="text" Facilites="Facilites" onChange={this.handleChangeFacilites} />
          </label>
         
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}