import React, {Component} from 'react';
import axios from 'axios';

export default class update extends Component {

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
    componentDidMount() {
        axios.get(`https://lirtenhub-na.herokuapp.com/api/Candidates/`+this.props.match.params.id)
            .then(response => {
                this.setState({
                    FirstName: response.data.FirstName,
                    LastName: response.data.LastName,
                    User_Category: response.User_Category,
                    Birthdate: response.data.Birthdate,
                    email:response.data.email,
                    password:response.data.password
                })
            })
            .catch(function(error) {
                console.log(error)
            })
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
        const obj = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            email: this.state.email,
            password: this.state.password,
            Birthdate:this.state.Birthdate
        };
        console.log(this.props.match.params.id)
        axios.put('https://lirtenhub-na.herokuapp.com/api/Candidates/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        this.props.history.push('/Candidates/get');
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>update</h3>
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
                        <input  type="text"
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
                        <input type="submit" value="update" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}