import React, {Component} from 'react';
import axios from 'axios';
export default class  UserForm extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeUserCategory = this.onChangeUserCategory.bind(this);
        this.onChangeUseremail = this.onChangeUseremail.bind(this);
        this.onChangeUserpassword = this.onChangeUserpassword.bind(this);
        this.onChangeUserBirthdate = this.onChangeUserBirthdate.bind(this);
        this.onChangeUserBasic_Info = this.onChangeUserBasic_Info.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            FirstName: '',
            LastName: '',
            User_Category: '',
            Birthdate:'',
            email:'',
            password:'',
            Basic_Info:''

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
onChangeUserBasic_Info(e) {
    this.setState({
       Basic_Info: e.target.value
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
            email:this.state.email,
            Basic_Info: this.state.Basic_Info
        }
        const User2 = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            User_Category: this.state.User_Category,
            Birthdate:this.state.Birthdate,
            password:this.state.password,
            email:this.state.email
        }
        if(User.User_Category==='Member'){
        axios.post(`https://lirtenhub-na.herokuapp.com/api/Candidates`,User2)
            .then(res => console.log(res.data));
           // this.props.history.push('/Candidates/get');

        }
        
        if(User.User_Category==='Consulting_Agent'){
            console.log('bola')
        axios.post(`https://lirtenhub-na.herokuapp.com/api/consultancyAgencies`,User)
             .then(res => console.log(res.data));
             this.props.history.push('/ConsultancyAgencies/get');

            }
            if(User.User_Category==='Admin'){
                console.log('MMM')
            axios.post(`https://lirtenhub-na.herokuapp.com/api/admins`,User2)
                 .then(res => console.log(res.data));
                 this.props.history.push('/Admins/get');
    
                }    
                if(User.User_Category==='Partner_CoWorkingSpace'){
                    console.log('AAA')
                axios.post(`https://lirtenhub-na.herokuapp.com/api/co_working_spaces`,User)
                     .then(res => console.log(res.data));
                     this.props.history.push('/co_working_space/get');
        
                    }    

        this.setState({
          FirstName: '',
          LastName: '',
          User_Category: '',
          Birthdate:'',
          email:'',
          password:'',
          Basic_Info:''
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
                        <label>Basic_Info: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Basic_Info}
                                onChange={this.onChangeUserBasic_Info}
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
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="UserOptions"
                                    id="Consulting_Agent"
                                    value="Consulting_Agent"
                                    checked={this.state.User_Category==='Consulting_Agent'}
                                    onChange={this.onChangeUserCategory}
                                    />
                            <label className="form-check-label">Consulting_Agent</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="UserOptions"
                                    id="Admin"
                                    value="Admin"
                                    checked={this.state.User_Category==='Admin'}
                                    onChange={this.onChangeUserCategory}
                                    />
                            <label className="form-check-label">Admin</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="UserOptions"
                                    id="Partner_CoWorkingSpace"
                                    value="Partner_CoWorkingSpace"
                                    checked={this.state.User_Category==='Partner_CoWorkingSpace'}
                                    onChange={this.onChangeUserCategory}
                                    />
                            <label className="form-check-label">Partner_CoWorkingSpace</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Sign up" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}