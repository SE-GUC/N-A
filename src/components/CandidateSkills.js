import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class update extends Component {
    
    constructor(props) {
        super(props);
        this.onChangeSkills = this.onChangeSkills.bind(this);
        this.state = {
            Skills: ''
        }
    }
    componentDidMount() {
        axios.get(`https://lirtenhub-na.herokuapp.com/api/Candidates/Skills/`+this.props.match.params.id)
            .then(response => {
                this.setState({
                    Skills: response.data.data
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

 
    onChangeSkills(e) {
        this.setState({
            Skills: e.target.value
        });
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Skills</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Skills: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Skills}
                                onChange={this.onChangeSkills}
                                />
                    </div>
        <Link to={"/Candidates/Skillsupdate/"+this.props.match.params.id}>Edit</Link><br></br>
        <Link to={"/Candidates/Skillsadd/"+this.props.match.params.id}>Add</Link><br></br>
        <Link to={"/Candidates/Skillsdelete/"+this.props.match.params.id}>delete</Link><br></br>
        <Link to={"/Candidates/get/"+this.props.match.params.id}>back</Link><br></br>
                </form>
            </div>
        )
    }
}
