import React, {Component} from 'react';
import axios from 'axios';
export default class  UserForm extends Component {

    constructor(props) {
        super(props);
        this.onChangeUseremail = this.onChangeUseremail.bind(this);
        this.onChangeUserpassword = this.onChangeUserpassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email:'',
            password:''
        }
    }

  
    onChangeUseremail(e) {
      this.setState({
          email: e.target.value
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
            password:this.state.password,
            email:this.state.email,
        }

        axios.get(`https://lirtenhub-na.herokuapp.com/api/Candidates`)
            .then(response => {
                console.log(response.data.data)
                for(let i=0;i<response.data.data.length;i++){
                    console.log(User.email)
                    console.log(response.data.data[i].email)
                    console.log(User.password)
                    console.log(response.data.data[i].password)
                    if((User.email===response.data.data[i].email)&&(User.password===response.data.data[i].password)){
                     this.props.history.push('/myaccount/'+response.data.data[i]._id);
                     break ;
                    }
                 }});        
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>login</h3>
                <form onSubmit={this.onSubmit}>
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
                        <input type="submit" value="login" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}