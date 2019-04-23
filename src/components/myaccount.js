import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class TodosList extends Component {

    
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.state = {
            FirstName: '',
            LastName:'',
            BirthDate:'',
            email:'',
            password:''

        }
    }
    componentDidMount() {
        axios.get(`https://lirtenhub-na.herokuapp.com/api/Candidates/`+this.props.match.params.id)
            .then(response => {
                this.setState({
            FirstName: response.data.FirstName,
            LastName:response.data.LastName,
            BirthDate:response.data.BirthDate,
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
    onChangeBirthDate(e) {
        this.setState({
            BirthDate: e.target.value
        });
    }
    onChangeemail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangepassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    render() {
        return (
            <div>
                <h3>Welcome</h3>
                            <div>FirstName {this.state.FirstName} </div>
                            <div> LastName  {this.state.LastName} </div>
                            <div> BirthDate {this.state.BirthDate} </div>
                            <div> email     {this.state.email} </div>
                            <div> password  {this.state.password} </div>
                            <div>Avg_Rating{this.state.AVG} </div>
                            <div>Ratings   {this.state.Rating} </div>
                            <div>Actions
            <td><Link to={"/Candidates/edit/"+this.props.match.params.id}>Edit</Link></td> 
           <td><Link to={"/Candidates/delete/"+this.props.match.params.id}>Delete</Link></td> 
           <td><Link to={"/Candidates/Certificate/"+this.props.match.params.id}>certificates</Link></td> 
           <td><Link to={"/Candidates/Intrests/"+this.props.match.params.id}>Intrests</Link></td> 
           <td><Link to={"/Candidates/Past_Projects/"+this.props.match.params.id}>Past_Projects</Link></td> 
           <td><Link to={"/Candidates/Skills/"+this.props.match.params.id}>Skills</Link></td> 
           </div>
                   
            </div>
        )
    }
}