import React from 'react';
import axios from 'axios';

export default class Create_Admin extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    Password: '',
    Birthdate: '',
    JoinDate: 0
  }

  handleChangefname = event => {
    this.setState({ first_name: event.target.value });
  }
  handleChangelname = event => {
    this.setState({ last_name: event.target.value });
  }
  handleChangeemail = event => {
    this.setState({ email: event.target.value });
  }
  handleChangepassword = event => {
    this.setState({ Password: event.target.value });
  }
  handleChangebd = event => {
    this.setState({ Birthdate: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');

    const admin = {
      first_name: event.target.first_name,
      last_name: event.target.last_name,
      email: event.target.email,
      Password: event.target.Password,
      Birthdate: event.target.Birthdate, 
      JoinDate: day
    };

    var headers = {
      ContentType: "application/json"
  }
  
    axios.post(`http://localhost:5000/api/admins/`, { admin }, {headers: headers})
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
            Admin First Name:
            <input type="text" first_name="first_name" onChange={this.handleChangefname} />
          </label>
          <label>
            Admin Last Name:
            <input type="text" last_name="last_name" onChange={this.handleChangelname} />
          </label>
          <label>
            Admin Email:
            <input type="text" email="email" onChange={this.handleChangeemail} />
          </label>
          <label>
            Admin password:
            <input type="text" password="Password" onChange={this.handleChangepassword} />
          </label>
          <label>
            Admin Birth Date:
            <input type="text" birthdate="Birthdate" onChange={this.handleChangebd} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}