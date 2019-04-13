import React, {Component} from 'react';
import axios from 'axios';
import {  Link} from 'react-router-dom'
export default class  UserForm extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeUserCategory = this.onChangeUserCategory.bind(this);
        this.onChangeUseremail = this.onChangeUseremail.bind(this);
        this.onChangeUserpassword = this.onChangeUserpassword.bind(this);
        this.onChangeUserBirthdate = this.onChangeUserBirthdate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            FirstName: '',
            LastName: '',
            User_Category: '',
            Birthdate:'',
            email:'',
            password:''
        }
    }

    onChangeFirstName(e) {
        this.setState({
            FirstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            LastName: e.target.value
        });
    }

    onChangeUserCategory(e) {
        this.setState({
            User_Category: e.target.value
        });
    }
    onChangeUseremail(e) {
      this.setState({
          email: e.target.value
      });
  }
  onChangeUserBirthdate(e) {
    this.setState({
        Birthdate: e.target.value
    });
}
onChangeUserpassword(e) {
  this.setState({
      password: e.target.value
  });
}

    onSubmit(e) {
        e.preventDefault();
        console.log(`Form submitted:`);
        const User = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            User_Category: this.state.User_Category,
            Birthdate:this.state.Birthdate,
            password:this.state.password,
            email:this.state.email
        }

        axios.post(`https://lirtenhub-na.herokuapp.com/api/Candidates`,User)
            .then(res => console.log(res.data));

        this.setState({
          FirstName: '',
          LastName: '',
          User_Category: '',
          Birthdate:'',
          email:'',
          password:''
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Sign up</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>FirstName: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.FirstName}
                                onChange={this.onChangeFirstName}
                                />
                    </div>
                    <div className="form-group">
                        <label>LastName: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.LastName}
                                onChange={this.onChangeLastName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Birthdate: </label>
                        <input  type="date"
                                className="form-control"
                                value={this.state.Birthdate}
                                onChange={this.onChangeUserBirthdate}
                                />
                    </div>
                    <div className="form-group">
                        <label>email: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeUseremail}
                                />
                    </div>
                    <div className="form-group">
                        <label>password: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangeUserpassword}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="UserOptions"
                                    id="Member"
                                    value="Member"
                                    checked={this.state.User_Category==='Member'}
                                    onChange={this.onChangeUserCategory}
                                    />
                            <label className="form-check-label">Member</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Sign up" className="btn btn-primary" />
                    </div>
                </form>
                <Link to={"/Candidates/get"}>go to your account</Link>
            </div>
        )
    }
}